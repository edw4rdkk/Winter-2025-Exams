// Refactor following solution
// Get day number

// step 4: simplify return logic

'use strict';

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const getDayNumber = (input) => {
const index = DAYS.findIndex((day) => input.startsWith(day.toLowerCase()));
  return (index + 1) || -1;
};

module.exports = getDayNumber;
