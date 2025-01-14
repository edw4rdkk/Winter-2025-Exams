// Refactor following solution
// Sum all number values in dict

// step 5: rename function and variables

'use strict';

const sumNumberValues = (obj) => {
  let totalSum = 0;
  const keys = Object.keys(obj);
  for (const element of keys) {
    const value = obj[element];
    if (typeof value === 'number') totalSum += value;
 }
  return totalSum;
};

module.exports = sumNumberValues;
