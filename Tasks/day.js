// Refactor following solution
// Get day number

// step 2: add const, fix naming, initialize i directly in the loop

'use strict';

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const getDayNumber = (input) => {
  for (let i = 0; i < DAYS.length; i++) {
    if (input.startsWith(DAYS[i].toLowerCase())) {
      return i + 1;
    }
  }
  return -1;
};

module.exports = getDayNumber;
