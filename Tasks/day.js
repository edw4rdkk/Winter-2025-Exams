// Refactor following solution
// Get day number

// step 3: replace for loop with findIndex

'use strict';

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const getDayNumber = (input) => {
const index = DAYS.findIndex((day) => input.startsWith(day.toLowerCase()));
  return index === -1 ? -1 : index + 1;
};

module.exports = getDayNumber;
