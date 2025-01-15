// Refactor following solution
// Reverse an array, you can't use .reverse()

// step 6: fix naming for better understanding
'use strict';

const reverseArray = (array) => {
  const result = [];
  for (let i = array.length - 1; i >= 0; i--) {
    result.push(array[i]);
  }
  return result;
};

module.exports = reverseArray;
