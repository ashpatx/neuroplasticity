/* Description: You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.
The returned value must be a string, and have "***" between each of its letters.
You should not remove or add elements from/to the array. */

//Solution: sort array, access first element of sorted array using [0], split string of first element into substrings (individual characters) then join characters together with *** between.

function twoSort(s) {
  return s.sort()[0].split('').join('***');
}
