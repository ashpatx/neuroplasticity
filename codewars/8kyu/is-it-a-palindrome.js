// Description: Write a function that checks if a given string (case insensitive) is a palindrome. A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as madam or racecar.

/* Pseduocode: 
1. convert string to lowercase
2. reverse string by split method, reverse method and join method
3. boolean to see if reversed string is equal to original lowercase string
*/

// Solution:
function isPalindrome(str) {
  const lowerCaseStr =  str.toLowerCase();
  const reversedStr =  lowerCaseStr.split("").reverse().join("");
  return reversedStr === str ? "It is a palindrome" : "It is not a palindrome";
}

// Improved Solution: simpler, more elegant arrow function
const isPalindrome = str => str.toLowerCase() ===str.toLowerCase().split('').reverse().join('');
