// Refactor following solution
// Sum all numbers from an array

// step 5: use reduce method instead of for loop,
// change parameter name for better understanding

'use strict';

const k = (array) => {
  const totalSum = array.reduce((acc, num) => {
    if (typeof num === 'number') {
      return acc + num;
    }
    return acc;
  }, 0);
  return totalSum;
};

module.exports = k;
