// Refactor following solution
// Get one random element from an array

// step 2: avoid mutating function input parameter

'use strict';

const SAMPLE = (arr) => {
  const randomElement = arr[Math.floor(Math.random() * arr.length)];
  return randomElement;
};

module.exports = SAMPLE;
