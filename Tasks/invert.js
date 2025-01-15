// Refactor following solution
// Reverse an array, you can't use .reverse()

// step 3: remove unused arguments and placeholders

'use strict';

const invert = (A) => {
  const T = Object.keys(A, 4);
  T.forEach((_, i) => {
    T[i] = A.pop();
  });
  return T;
};

module.exports = invert;
