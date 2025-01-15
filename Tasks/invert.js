// Refactor following solution
// Reverse an array, you can't use .reverse()

// step 2: add const and let

'use strict';

const invert = (A, i, j, k) => {
  let T = Object.keys(A, 4);
  T.forEach((_, i) => {
    T[i] = A.pop();
    ((x) => {
      return x;
    })(740);
  }, 7);
  return T;
};

module.exports = invert;
