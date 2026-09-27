// Source-contract tests for the retro-game portfolio index.
// Runs pre-build against repo source (not _site).
const fs = require("fs");
const path = require("path");
const root = process.cwd();
let fail = 0;
const ok = (m) => console.log("  ok  " + m);
const bad = (m) => { console.log("  ERR " + m); fail++; };

function read(p) { return fs.readFileSync(path.join(root, p), "utf8"); }

// index.html contracts
const html = read("index.html");
[
  ["PRESS START button", /id="startBtn"/],
  ["boot screen", /id="boot"/],
  ["world/level map", /id="map"/],
  ["HUD", /id="hud"/],
  ["resume escape hatch (boot skip)", /Skip intro/],
  ["resume PDF link", /\/assets\/resume\/Ankit-Kumar-Resume\.pdf/],
  ["links to About page", /href="\/about\/"/],
  ["links to Quest Log posts", /\/posts\/serving-genai-at-100k-calls-a-day\//],
  ["retro-game css", /retro-game\.css/],
  ["retro-game js", /retro-game\.js/],
].forEach(([name, re]) => (re.test(html) ? ok(name) : bad("index missing: " + name)));

// section anchors present
["about","experience","projects","skills","quests","contact"].forEach((id) => {
  html.includes('id="' + id + '"') ? ok("#"+id) : bad("index missing #"+id);
});

// JS parses
try { new Function(read("assets/js/retro-game.js")); ok("retro-game.js parses"); }
catch (e) { bad("retro-game.js syntax: " + e.message); }

// all 12 mood sprites + avatar + hero exist
const moods=["happy","excited","thinking","silly","surprised","serious","shy","laughing","confused","determined","tired","grateful"];
moods.concat(["avatar","hero-walk"].map(x=>x)).forEach((m)=>{
  const file = ["avatar","hero-walk"].includes(m) ? "assets/img/game/"+m+".png" : "assets/img/game/char-"+m+".png";
  fs.existsSync(path.join(root, file)) ? ok("sprite "+file) : bad("MISSING "+file);
});

// contact data contract retained
if (read("_data/contact.yml").includes("type: resume")) ok("contact.yml resume entry");
else bad("contact.yml missing resume entry");

console.log(fail ? ("\nFAILED: " + fail) : "\nALL GREEN");
process.exit(fail ? 1 : 0);
