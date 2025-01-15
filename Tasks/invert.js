// Refactor following solution
// Reverse an array, you can't use .reverse()

// step 5: replace forEach with for loop
'use strict';

const invert = (A) => {
  const T = [];
  for (let i = A.length - 1; i >= 0; i--) {
    T.push(A[i]);
  }
  return T;
};

module.exports = invert;
