// Refactor following solution
// Get one random element from an array

// step 4: fix naming for better understanding

'use strict';

const getRandomElement = (arr) =>  arr[Math.floor(Math.random() * arr.length)];

module.exports = getRandomElement;
