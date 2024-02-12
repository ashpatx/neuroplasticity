//Description: Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

//Solution: Used a ternary 
function boolToWord(bool) {
  return bool ? 'Yes' : 'No';
}

//Refactored Improved Solution: simplify further with arrow function
const boolToWord = bool => bool ? 'Yes' : 'No';
