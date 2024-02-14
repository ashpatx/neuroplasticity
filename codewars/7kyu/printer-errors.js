/* Description: In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.
The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...
Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.
You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.
The string has a length greater or equal to one and contains only letters from ato z.

Examples:
s="aaabbbbhaijjjm"
printer_error(s) => "0/14"

s="aaaxbbbbyyhwawiwjjjwwm"
printer_error(s) => "8/22" */

/* Psudedocode: 
1. initialize a const variable continaing string of acceptable letters (a to m)
2. split string of acceptable letters into an array of individual characters
3. let i = 0 to use as an index to iterate through characters of input string
4. let count = 0 to count number of characters in input string
5. while loop iterate through each character of input string starting from first character, ending at last character 
6. if statement condition to check if current character is found in the letters array using indexOf method (search through array)
7. in if statement if character is not found in array, increment count variable
8. return string with count of characters not in acceptable letters array and total number of character in input string

// Solution:
function printerError(s) {
    const letters = ("abcdefghijklm").split("");
  const a = s.length;
  let i = 0; 
  let count = 0;
  
  while (i<a) {
    if (letters.indexOf(s[i]) === -1) {
      count++;
    }
    i++;
  }
  return (count+"/"+a);
}

// Improved Solution: more concise arrow function that takes s (representing input string), use replace method to remove all characters from input string that are in the acceptable letter range (a to m) replacing with an empty string, calculate length of resulting string using length method, concatenate the count of characters removed + total numbers of characters in input string separated by '/'
const printerError = s => `${s.replace(/[a-m]/gi, "").length}/${s.length}`;
