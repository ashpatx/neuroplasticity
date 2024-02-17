/* Description: Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
The output should be two capital letters with a dot separating them.
It should look like this:
Sam Harris => S.H
patrick feeney => P.F */

/* Pseudocode:
1. split first and last names by space
2. use map method to convert first character of each name to uppercase (use uppercase method)
3. use join method to join array of initials back together to form a new string using . as a separator
*/

// Solution: 
function abbrevName(name){
  const initials = name.split(" ").map(i => i[0].toUpperCase()).join(".");
  return initials;
}

// Improved Solution: extract each first character of split name string and convert to uppercase, then rejoin with . between
function abbrevName(name){
  return name.split(' ').map(x => x.substr(0, 1).toUpperCase()).join('.');
}
