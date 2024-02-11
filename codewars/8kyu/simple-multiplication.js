//Description: multiplying a given number by eight if it is an even number and by nine otherwise.

//Solution: used a ternary for if/else statement 

function simpleMultiplication(n) {
 return n % 2 === 0 ? n * 8 : n * 9;
}

//Refactored Improved Solution: better because we wrap the operator on the outside which is the same use case for both if and else tests
function simpleMultiplication(n) {
    return n * (n % 2 ? 9 : 8);
}
