// Description: Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

/* Pseduocode: 
1. split method to separate string into an array of words
2. map method to iterate over each word (element) in the array 
3. reverse method to reorganize each word 
4. join words back together in new order
5. return new array of words joined back to form a new string
*/

// Solution: 
function reverseWords(str) {
  let reverseWordArr = str.split(" ").map(word => word.split("").reverse().join(""));
  return reverseWordArr.join(" ");
}

// Improved Solution: just use one line! 
function reverseWords(str) {
  return str.split(" ").map(word => word.split("").reverse().join("")).join(" ");
}
