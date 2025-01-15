// Refactor following solution
// Sum all numbers from an array

// step 6: fix naming

'use strict';

const sumAllNumbers = (array) => {
  const totalSum = array.reduce((acc, num) => {
    if (typeof num === 'number') {
      return acc + num;
    }
    return acc;
  }, 0);
  return totalSum;
};

module.exports = sumAllNumbers;
