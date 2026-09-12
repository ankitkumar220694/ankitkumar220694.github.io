'use strict';

const assert = require('node:assert/strict');
const { calculateGaze } = require('../../assets/js/portfolio-landing.js');

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

console.log('Portfolio gaze interaction tests passed.');
