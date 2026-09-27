#!/usr/bin/env python
"""
BRIEF: Four retro 16-bit pixel-art category icons for the portfolio LV-card menu.
Replace the face portraits on Experience / Projects / Skill Tree / Quest Log.
Palette matches retro-game.css: deep indigo card bg (#2b2a6b-ish), gold accent
(#ffcf40), purple frame (#8f7bff), off-white highlights. Chunky "pixel" blocks
drawn on a low-res grid then nearest-neighbour upscaled so edges stay crisp.

Symbols: experience=briefcase, projects=rocket, skills=branching skill-tree,
quests=scroll/quest-book.

Run:  python make_lv_icons.py <out_dir>
Outputs: icon-experience.png, icon-projects.png, icon-skills.png, icon-quests.png
(+ hd/ 2x variants) — GRID*SCALE px each.
"""

from __future__ import annotations

import sys
from pathlib import Path

from PIL import Image, ImageDraw

GRID = 32          # logical pixel grid
SCALE = 8          # -> 256px output (HD = SCALE*2)

# palette
BG = (43, 42, 107, 255)        # card indigo
FRAME = (143, 123, 255, 255)   # purple
GOLD = (255, 207, 64, 255)
GOLD_D = (200, 150, 20, 255)   # gold shadow
INK = (26, 22, 48, 255)        # dark outline
WHITE = (238, 236, 255, 255)
STEEL = (150, 156, 200, 255)
RED = (232, 90, 90, 255)
GREEN = (120, 200, 120, 255)


def new_canvas() -> tuple[Image.Image, ImageDraw.ImageDraw]:
    img = Image.new("RGBA", (GRID, GRID), BG)
    d = ImageDraw.Draw(img)
    # frame border (1px logical)
    d.rectangle([0, 0, GRID - 1, GRID - 1], outline=FRAME)
    d.rectangle([1, 1, GRID - 2, GRID - 2], outline=INK)
    return img, d


def px(d, x, y, color, w=1, h=1):
    d.rectangle([x, y, x + w - 1, y + h - 1], fill=color)


def icon_experience(d):
    # briefcase: gold body, dark handle, latch
    # handle
    px(d, 13, 8, INK, 6, 2)
    px(d, 13, 8, BG, 2, 1)
    px(d, 17, 8, BG, 2, 1)
    # body
    px(d, 7, 11, GOLD, 18, 13)
    d.rectangle([7, 11, 24, 23], outline=INK)
    # lid seam
    px(d, 7, 15, GOLD_D, 18, 1)
    # latch
    px(d, 15, 14, INK, 2, 3)
    px(d, 15, 15, STEEL, 2, 1)
    # shine
    px(d, 9, 12, WHITE, 2, 1)


def icon_projects(d):
    # rocket: pointed nose, body, window, fins, flame
    # nose
    px(d, 15, 5, RED, 2, 1)
    px(d, 14, 6, RED, 4, 1)
    px(d, 14, 7, WHITE, 4, 1)
    # body
    px(d, 13, 8, WHITE, 6, 11)
    d.rectangle([13, 8, 18, 18], outline=INK)
    # window
    px(d, 15, 11, FRAME, 2, 2)
    d.rectangle([14, 10, 17, 13], outline=INK)
    # fins
    px(d, 10, 15, RED, 3, 4)
    px(d, 19, 15, RED, 3, 4)
    d.rectangle([10, 15, 12, 18], outline=INK)
    d.rectangle([19, 15, 21, 18], outline=INK)
    # flame
    px(d, 14, 19, GOLD, 4, 2)
    px(d, 15, 21, RED, 2, 2)


def icon_quests(d):
    # scroll: rolled top & bottom, parchment body with text lines
    # rolls
    px(d, 7, 7, GOLD_D, 18, 2)
    px(d, 7, 23, GOLD_D, 18, 2)
    d.rectangle([7, 7, 24, 8], outline=INK)
    d.rectangle([7, 23, 24, 24], outline=INK)
    # parchment
    px(d, 8, 9, WHITE, 16, 14)
    d.rectangle([8, 9, 23, 22], outline=INK)
    # text lines
    for yy in (12, 15, 18):
        px(d, 11, yy, FRAME, 10, 1)
    px(d, 11, 20, FRAME, 6, 1)
    # gold seal
    px(d, 18, 19, GOLD, 3, 3)
    d.rectangle([18, 19, 20, 21], outline=INK)


def icon_skills(d):
    # tools: a clear double-open-ended wrench, diagonal, gold
    # shaft (thick diagonal band)
    for i in range(10):
        px(d, 11 + i, 20 - i, GOLD, 3, 3)
    d.line([11, 22, 22, 11], fill=INK, width=1)
    # top-right open jaw (C shape opening up-right)
    px(d, 19, 6, GOLD, 6, 3)
    px(d, 22, 6, BG, 2, 1)            # notch cut into jaw
    px(d, 19, 9, GOLD, 6, 2)
    d.rectangle([19, 6, 24, 10], outline=INK)
    # bottom-left open jaw (C shape opening down-left)
    px(d, 7, 21, GOLD, 6, 3)
    px(d, 7, 23, BG, 2, 1)            # notch
    px(d, 7, 19, GOLD, 6, 2)
    d.rectangle([7, 19, 12, 23], outline=INK)
    # shine
    px(d, 14, 15, WHITE, 1, 1)


def icon_contact(d):
    # classic telephone handset: two ear/mouth caps joined by a curved bar,
    # tilted like a receiver. Solid gold with dark outline.
    # earpiece cap (top-left)
    px(d, 7, 8, GOLD, 6, 4)
    px(d, 8, 6, GOLD, 4, 3)          # cap flare
    d.rectangle([7, 6, 12, 11], outline=INK)
    # mouthpiece cap (bottom-right)
    px(d, 19, 20, GOLD, 6, 4)
    px(d, 20, 23, GOLD, 4, 2)        # cap flare
    d.rectangle([19, 20, 24, 24], outline=INK)
    # curved handle bar joining them (the receiver's bow)
    for i in range(9):
        px(d, 11 + i, 11 + i, GOLD, 2, 2)
    d.line([11, 11, 20, 20], fill=INK)
    # dark speaker holes on caps
    px(d, 9, 8, INK, 2, 2)
    px(d, 21, 21, INK, 2, 2)
    # ring waves near earpiece
    px(d, 15, 6, FRAME, 1, 1)
    px(d, 17, 4, FRAME, 1, 1)


ICONS = {
    "experience": icon_experience,
    "projects": icon_projects,
    "skills": icon_skills,
    "quests": icon_quests,
    "contact": icon_contact,
}


def render(name: str, fn) -> Image.Image:
    img, d = new_canvas()
    fn(d)
    return img


def main():
    out = Path(sys.argv[1]) if len(sys.argv) > 1 else Path(".")
    hd = out / "hd"
    out.mkdir(parents=True, exist_ok=True)
    hd.mkdir(parents=True, exist_ok=True)
    for name, fn in ICONS.items():
        base = render(name, fn)
        std = base.resize((GRID * SCALE, GRID * SCALE), Image.NEAREST)
        big = base.resize((GRID * SCALE * 2, GRID * SCALE * 2), Image.NEAREST)
        std.save(out / f"icon-{name}.png")
        big.save(hd / f"icon-{name}.png")
        print("wrote", out / f"icon-{name}.png")


if __name__ == "__main__":
    main()
