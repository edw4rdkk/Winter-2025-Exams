// Refactor following solution
// Get one random element from an array

// step 1: add 'use strcit'

'use strict';

const SAMPLE = (arr) => {
  arr = arr[Math.floor(Math.random() * arr.length)];
  return arr;
};

module.exports = SAMPLE;
