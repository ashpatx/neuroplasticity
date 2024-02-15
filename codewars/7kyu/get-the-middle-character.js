// Description: You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

/* Pseudocode: 
1. divide string length by 2 (if even, string will return index before middle - if odd, it will return middle index)
2. if/else condition to determine if length of string is even or odd using modulus (string.length % 2 == 0)
3. use slice method to extract a section of the string containing two middle characters
4. if string is odd, 1 character returns using charAt. if even, 2 middle characters. */

// Solution:
function getMiddle(s) {
  let middleIndex = s.length / 2; 
  //if else condition to determine odd/even string length
  if (s.length % 2 == 0) {
    //even
    return s.slice(middleIndex - 1, middleIndex + 1); 
  } else {
    return s.charAt(middleIndex);
}
}

// Improved Solution: round divided string length using Math.ceil (regardless of even or odd), use a ternary to check if length is odd or even and return 2 characters if even and 1 if odd. use substring method to extract middle character from the string.
function getMiddle(s){
 return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}
