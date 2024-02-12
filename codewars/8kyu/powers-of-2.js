//Description: Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

//Solution: for loop starts from 0 and ends at n (inclusive), calculating the power of 2 and pushes result to the defined array, after loop completes it returns the result.
function powersOfTwo(n){
  const result = [];
  for (let i=0; i <= n; i++) {
    result.push(Math.pow(2,i));
  }
  return result;
} 
