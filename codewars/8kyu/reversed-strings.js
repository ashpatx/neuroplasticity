//Description: Complete the solution so that it reverses the string passed into it.

/*Pseudocode: 
1. split string
2. reverse each letter
3. join back into a string
*/

//Solution: 
function solution(str){
  return str.split('')
  .reverse()
  .join('');
}

//Improved Solution: use spread operator to convert input string to an array first
let solution = str => [...str].reverse().join('');
