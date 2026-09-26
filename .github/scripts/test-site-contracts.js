// Source contracts for the Neo-Arcade Editorial portfolio.
const fs = require("fs");
const path = require("path");
const root = process.cwd();
let failures = 0;
const read = (file) => fs.readFileSync(path.join(root, file), "utf8");
const check = (condition, message) => {
  if (condition) console.log("  ok  " + message);
  else { console.error("  ERR " + message); failures += 1; }
};

const home = read("index.html");
[
  ["editorial headline", /AI systems that/],
  ["primary work route", /href="#work"/],
  ["writing route", /href="\/archives\/"/],
  ["about route", /href="\/about\/"/],
  ["topics route", /href="\/tags\/"/],
  ["resume escape hatch", /Ankit-Kumar-Resume\.pdf/],
  ["responsive menu control", /aria-controls="site-nav"/],
  ["high-DPI hero sprite", /hd\/char-determined\.png 2x/],
  ["homepage stylesheet", /retro-game\.css/],
  ["homepage script", /retro-game\.js/],
].forEach(([message, expression]) => check(expression.test(home), message));

["work", "writing", "contact"].forEach((id) => {
  check(home.includes(`id="${id}"`), `homepage #${id}`);
});

const include = read("_includes/route-hero.html");
check(/--figure-image/.test(include), "shared route hero uses CSS-backed figure");
check(/include\.image_hd/.test(include), "route hero uses high-DPI source");

const routeFiles = ["_tabs/projects.md", "_tabs/about.md", "_tabs/archives.md", "_tabs/tags.md", "assets/404.html"];
routeFiles.forEach((file) => check(/route-hero\.html/.test(read(file)), `${file} uses shared route hero`));
check(fs.existsSync(path.join(root, "_includes/writing-index.html")), "custom writing index exists");
check(fs.existsSync(path.join(root, "_includes/topic-index.html")), "custom topic index exists");
check(/route-hero\.html/.test(read("_layouts/tag.html")), "dynamic tag pages use shared route hero");
check(/class="recovery-links"/.test(read("assets/404.html")), "404 uses semantic recovery links");
const localePlugin = read("_plugins/projects-tab-locale.rb");
check(/tabs\['tags'\] = 'Topics'/.test(localePlugin), "Topics navigation label");
check(/tabs\['archives'\] = 'Writing'/.test(localePlugin), "Writing navigation label");

const postFiles = fs.readdirSync(path.join(root, "_posts")).filter((file) => file.endsWith(".md"));
postFiles.forEach((file) => {
  const body = read(path.join("_posts", file));
  check(/post-character\.html/.test(body), `${file} uses shared topic figure`);
  check(/image_hd="\/assets\/img\/game\/hd\//.test(body), `${file} has high-DPI figure`);
});
check(/--figure-image/.test(read("_includes/post-character.html")), "post figure bypasses content-image wrapper");

const moods = ["happy", "excited", "thinking", "serious", "surprised", "determined", "grateful", "confused"];
moods.forEach((mood) => {
  check(fs.existsSync(path.join(root, `assets/img/game/hd/char-${mood}.png`)), `high-DPI ${mood} sprite`);
});
check(fs.existsSync(path.join(root, "assets/img/game/hd/avatar.png")), "high-DPI avatar");

try {
  new Function(read("assets/js/retro-game.js"));
  console.log("  ok  homepage script parses");
} catch (error) {
  console.error("  ERR homepage script syntax: " + error.message);
  failures += 1;
}

check(read("_data/contact.yml").includes("type: resume"), "resume contact entry retained");
console.log(failures ? `\nFAILED: ${failures}` : "\nALL GREEN");
process.exit(failures ? 1 : 0);
