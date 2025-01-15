// Refactor following solution
// Reverse an array, you can't use .reverse()

// step 4: replace Object.keys(A, 4) with an empty array
'use strict';

const invert = (A) => {
  const T = [];
  T.forEach((_, i) => {
    T[i] = A.pop();
  });
  return T;
};

module.exports = invert;
