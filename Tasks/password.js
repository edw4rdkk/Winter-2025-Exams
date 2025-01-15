// Refactor following solution
// Generate random password

// step 4: fix naming

'use strict';

const generatePassword = (symbols, length) => {
  const MAX = symbols.length;
  let password = '';
  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * MAX);
    password += symbols[index];
  }
  return password;
};

module.exports = generatePassword;
