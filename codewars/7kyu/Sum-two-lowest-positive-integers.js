// Description: Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed. For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

/* Pseudocode: 
1) Create an array
2) Sort numbers in array from lowest value to highest value, using .sort method subtracting b from a 
3) Store in sortedNumbers constant variable
4) Return the sum of the first two numbers (elements) in the array (the two smallest numbers in the array) */

// Solution: 
function sumTwoSmallestNumbers(numbers){
  const sortedNumbers = numbers.sort((a, b) => a - b);
  return sortedNumbers[0] + sortedNumbers[1];
}

// Improved Refactored Solution: use array destructuring to directly extract the first two elements of the sorted array and assign the to variables (a and b)
function sumTwoSmallestNumbers(numbers) {  
  const [a, b] = numbers.sort((a, b) => a - b);
  return a + b;
}
