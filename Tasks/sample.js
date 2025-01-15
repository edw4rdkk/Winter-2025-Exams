// Refactor following solution
// Get one random element from an array

// step 3: directly return random element

'use strict';

const SAMPLE = (arr) =>  arr[Math.floor(Math.random() * arr.length)];

module.exports = SAMPLE;
