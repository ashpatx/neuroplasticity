/*Description: In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
*/

/*Pseudocode:
1. split string into array of numbers
2. map method to map each substring (number) to actual number format/value
3. math max apply method to find max value in array and accept the number as an argument
4. math min apply method to find min value in array and accept as an argument
5. return concatenated max and min values into a string
*/

//Solution: 
function highAndLow(numbers){
  numbers = numbers.split(' ').map(Number);
  return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
}

//Improved Solution: use template literals and spread operator to take elements of numbers array as arguments (instead of using apply method) and returning string from there
function highAndLow(numbers){
  numbers = numbers.split(' ');
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}
