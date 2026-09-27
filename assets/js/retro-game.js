/* The Dream Team — retro portfolio engine (vanilla, no deps) */
(function () {
  "use strict";
  var boot = document.getElementById("boot");
  var hud = document.getElementById("hud");
  var world = document.getElementById("world");
  var startBtn = document.getElementById("startBtn");
  var companion = document.getElementById("companion");
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var MOODS = ["happy","excited","thinking","silly","surprised","serious",
               "shy","laughing","confused","determined","tired","grateful"];
  function moodSrc(m){ return "/assets/img/game/char-" + m + ".png"; }

  function start() {
    boot.classList.add("boot-out");
    var reveal = function () {
      boot.hidden = true;
      hud.hidden = false;
      world.hidden = false;
      if (companion) companion.hidden = false;
      history.replaceState(null, "", "#map");
      document.getElementById("map").scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
    };
    if (reduce) { reveal(); } else { setTimeout(reveal, 320); }
  }

  if (startBtn) {
    startBtn.addEventListener("click", start);
    document.addEventListener("keydown", function (e) {
      if (!boot.hidden && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); start(); }
    });
  }

  // If the user arrives with a deep-link hash (e.g. shared /#projects), skip boot.
  if (location.hash && location.hash !== "#map") {
    boot.hidden = true; hud.hidden = false; world.hidden = false;
    if (companion) companion.hidden = false;
  }

  // Section-triggered companion mood: watch panels, set companion sprite to
  // the mood of the section currently in view.
  var panelMood = {
    about:"happy", experience:"determined", projects:"excited",
    skills:"serious", quests:"thinking", contact:"grateful"
  };
  if ("IntersectionObserver" in window && companion) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          var m = panelMood[en.target.id];
          if (m) { companion.src = moodSrc(m); }
        }
      });
    }, { threshold: 0.5 });
    Object.keys(panelMood).forEach(function (id) {
      var el = document.getElementById(id);
      if (el) io.observe(el);
    });
  }

  // Idle expression cycling on the level-select cards (subtle, staggered).
  if (!reduce) {
    var cards = Array.prototype.slice.call(document.querySelectorAll(".level-card"));
    cards.forEach(function (card, i) {
      card.addEventListener("mouseleave", function () {
        var base = card.getAttribute("data-mood");
        card.querySelector("img").src = moodSrc(base);
      });
      card.addEventListener("mouseenter", function () {
        // playful: flip to a random alt mood on hover
        var alt = MOODS[(Math.floor(Math.random() * MOODS.length))];
        card.querySelector("img").src = moodSrc(alt);
      });
    });
  }

  // Konami-ish easter egg: press "m" to cycle companion through all moods once
  var eggIdx = 0, eggTimer = null;
  document.addEventListener("keydown", function (e) {
    if (e.key === "m" && companion && !world.hidden && !eggTimer) {
      eggIdx = 0;
      eggTimer = setInterval(function () {
        companion.src = moodSrc(MOODS[eggIdx % MOODS.length]);
        eggIdx++;
        if (eggIdx > MOODS.length) { clearInterval(eggTimer); eggTimer = null; }
      }, 220);
    }
  });
})();
