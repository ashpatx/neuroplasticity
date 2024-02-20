/*Description: Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.
Write a function that returns both the minimum and maximum number of the given list/array.
[1,2,3,4,5] --> [1,5]
[2334454,5] --> [5,2334454]
[1]         --> [1,1] */

/*Pseduocode: 
1. Math min method w/ spread operator
2. Math max method w/ spread operator
*/

//Solution:
function minMax(arr){
  return [Math.min(...arr), Math.max(...arr)];
}

//Improved Solution: arrow function
const minMax = arr => [ Math.min(...arr), Math.max(...arr) ];


