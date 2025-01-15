// Refactor following solution
// Sum all numbers from an array

// step 4: remove unnecessary lines and just return final sum

'use strict';

const k = (sum) => {
  let sum = [0];
  for (let i of s) {
    if (typeof i === 'number') {
        sum.push(sum[sum.length - 1] + i);  
      }
    }
  return sum[sum.length - 1];
};

module.exports = sum;
