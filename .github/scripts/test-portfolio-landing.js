'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { calculateGaze } = require('../../assets/js/portfolio-landing.js');

const root = path.resolve(__dirname, '../..');
const read = (relativePath) => fs.readFileSync(path.join(root, relativePath), 'utf8');
const count = (value, pattern) => (value.match(pattern) || []).length;

const bounds = { left: 100, top: 40, width: 200, height: 300 };
assert.deepEqual(calculateGaze(200, 190, bounds), { x: 0, y: 0 }, 'centered pointer keeps a neutral gaze');
assert.deepEqual(calculateGaze(10000, 10000, bounds), { x: 5.5, y: 3.8 }, 'gaze is clamped at the lower-right edge');
assert.deepEqual(calculateGaze(-10000, -10000, bounds), { x: -5.5, y: -3.8 }, 'gaze is clamped at the upper-left edge');

const right = calculateGaze(255, 190, bounds);
const up = calculateGaze(200, 107.5, bounds);
assert.equal(right.x, 2.75, 'horizontal gaze scales inside the clamp');
assert.equal(right.y, 0, 'horizontal movement does not create vertical drift');
assert.equal(up.x, 0, 'vertical movement does not create horizontal drift');
assert.equal(up.y, -1.9, 'vertical gaze scales inside the clamp');

const config = read('_config.yml');
const landing = read('index.html');
const landingLayout = read('_layouts/landing.html');
const landingCss = read('assets/css/portfolio-landing.css');
const secondaryCss = read('assets/css/jekyll-theme-chirpy.scss');
const projects = read('_tabs/projects.md');
const contact = read('_data/contact.yml');
const readme = read('README.md');

assert.match(config, /tagline: Full-Stack AI & ML Engineer/, 'secondary-page identity matches the landing page');
assert.match(config, /pwa:\s*\n\s*enabled: false/, 'stale PWA app-shell caching stays disabled');
assert.match(landingLayout, /portfolio-landing\.css[^\n]+\?v=\{\{ asset_version \}\}/, 'landing CSS is cache-busted');
assert.match(landingLayout, /portfolio-landing\.js[^\n]+\?v=\{\{ asset_version \}\}/, 'landing JavaScript is cache-busted');

for (const route of ['/projects/', '/about/']) {
  assert.ok(landing.includes(`'${route}' | relative_url`), `landing links to ${route}`);
}
assert.match(landing, /site\.resume_url \| relative_url/, 'landing links to the configured résumé');
assert.match(landing, /mailto:ankitkumar220694@gmail\.com/, 'contact CTA has a valid email target');
assert.doesNotMatch(landing, /href=["'](?:#|)["']/, 'landing has no empty or placeholder links');
assert.equal(count(landing, /data-pointer-card/g), 4, 'all four project tiles keep pointer interaction hooks');
assert.match(landing, /aria-controls="site-menu"/, 'mobile menu identifies the controlled navigation');
assert.match(landing, /aria-expanded="false"/, 'mobile menu exposes its initial state');
const landingJs = read('assets/js/portfolio-landing.js');
assert.match(landingJs, /restoreFocus: true/, 'Escape restores focus to the mobile-menu button');
assert.match(landingJs, /event\.key !== 'Tab'/, 'open mobile menu keeps keyboard focus within its links');

assert.equal(count(projects, /<details class="ak-card"/g), 10, 'all project case studies render as native details controls');
assert.equal(count(projects, /<summary>/g), 10, 'every project card has a native keyboard-operable summary');
assert.match(contact, /type: resume[\s\S]+Ankit-Kumar-Resume\.pdf/, 'secondary navigation exposes the résumé');
const resume = path.join(root, 'assets/resume/Ankit-Kumar-Resume.pdf');
assert.ok(fs.statSync(resume).size > 10_000, 'résumé PDF exists and is non-empty');

assert.match(landingCss, /Scale refinement:/, 'landing uses the approved compact scale');
assert.match(landingCss, /:focus-visible/, 'landing controls have visible keyboard focus');
assert.match(secondaryCss, /Portfolio skin for every Chirpy-powered route/, 'secondary routes share the portfolio skin');
assert.match(secondaryCss, /:focus-visible/, 'secondary controls have visible keyboard focus');
assert.doesNotMatch(secondaryCss, /#core-wrapper/, 'secondary skin targets current Chirpy 7.6 markup');
assert.doesNotMatch(secondaryCss, /#topbar-wrapper\s*\{[^}]*position\s*:/s, 'skin never overrides Chirpy topbar positioning');
assert.doesNotMatch(secondaryCss, /#sidebar\s*\{[^}]*\b(?:top|height|transform|position)\s*:/s, 'skin never overrides Chirpy sidebar layout');

assert.match(readme, /Full-Stack AI & ML Engineer · 6\+ years/, 'README reflects the current portfolio identity');
assert.doesNotMatch(readme, /\b5 years\b|Space Grotesk|custom light palette/i, 'README contains no stale portfolio/theme claims');

console.log('Portfolio interaction and source-contract tests passed.');
