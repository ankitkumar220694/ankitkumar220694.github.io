#!/usr/bin/env python3
"""Produce _site/__world.html: the game with the boot screen hidden and the
HUD + world + companion revealed, so the CI screenshot captures the
level-select map and mood panels instead of the PRESS START screen."""
h = open("_site/index.html", encoding="utf-8").read()
h = h.replace('<section id="boot" class="screen boot"',
              '<section id="boot" class="screen boot" hidden')
h = h.replace('<header id="hud" class="hud" hidden',
              '<header id="hud" class="hud"')
h = h.replace('<main id="world" class="world" hidden',
              '<main id="world" class="world"')
h = h.replace('<img id="companion" class="companion" src="/assets/img/game/hero-walk.png" alt="" hidden',
              '<img id="companion" class="companion" src="/assets/img/game/hero-walk.png" alt=""')
open("_site/__world.html", "w", encoding="utf-8").write(h)
print("wrote _site/__world.html")
