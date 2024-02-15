/*Description: There is a bus moving in the city which takes and drops some people at each bus stop.
You are provided with a list (or array) of integer pairs. Elements of each pair represent the number of people that get on the bus (the first item) and the number of people that get off the bus (the second item) at a bus stop.
Your task is to return the number of people who are still on the bus after the last bus stop (after the last array). Even though it is the last bus stop, the bus might not be empty and some people might still be inside the bus, they are probably sleeping there :D
Take a look on the test cases.
Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the returned integer can't be negative.
The second value in the first pair in the array is 0, since the bus is empty in the first bus stop.

/*Pseudocode:
1. keep track of total # of people on the bus as a variable
2. for loop to iterate over each element (stop from the busStops array)
3. calculate net change in number of people at each bus stop in the loop 
4. return total after all busStops
*/

//Solution:
var number =(busStops)=> {
  var people = 0;
  for (let stop of busStops) {
    people += stop[0] - stop[1];
  }
  return people;
}

//Improved Solution: use reduce method for accumulating total # of people on the bus, iterate over each stop in the array and return total.
const number = busStops => busStops.reduce((people, stop) => people + stop[0] - stop[1], 0)
