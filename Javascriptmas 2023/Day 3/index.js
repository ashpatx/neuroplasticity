/** Challenge:
 * Some children have got some pieces of candy. They 
 * want to eat as much candy as they can but each 
 * child must eat exactly the same amount. Determine 
 * how many pieces of candy can be eaten altogether. 
 * A piece of candy can not be split.
 * 
 * Example:
 * Children: 3, Candies: 10
 * Each of the 3 children can eat 3 candies. 
 * So the total number of candies that can be eaten 
 * is 3*3 = 9. So the function calcTotalCandies should 
 * log out 9.
 **/

function calcTotalCandies(children, candies) {
   //Max number of candies each child can eat which is 3 per child
  const candiesPerChild = Math.floor(candies / children);

  //Total candies that can be eaten 
  const totalCandies = candiesPerChild * children;

 console.log(totalCandies)
}

calcTotalCandies(3, 10) //output: 9
calcTotalCandies(4, 20) //output: 20
calcTotalCandies(6, 25) //output: 24
