//Description: Return the number (count) of vowels in the given string. We will consider a, e, i, o, u as vowels for this Kata (but not y). The input string will only consist of lower case letters and/or spaces.

/*Pseudocode:
1. match method to identify letters that are vowels
2. store results in a variable
3. ternary to check if matched variable is null, return 0, else return length (count) of variable
*/

//Solution:
function getCount(str){
  const match = str.match(/[aeiou]/gi);
  return match === null ? 0 : match.length;
}

//Improved Solution: single line using '' as a replacement for any letters that are not vowels, then counting every letter with length method.
function getCount(str){
  return str.replace(/[^aeiou]/gi, '').length;
}
