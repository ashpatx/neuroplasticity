/*Description: Trolls are attacking your comment section! A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
Your task is to write a function that takes a string and return a new string with all vowels removed.
For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
Note: for this kata y isn't considered a vowel.*/

/*Pseudocode:
1. initialize array of vowels
2. split string into array of individual letters
3. filter method to filter out letters that are not vowels by iterating on each element in the array only keeping those that are !vowels
4. rejoin filtered array of letters into a new string (with removed vowels)
*/

//Solution:
function disemvowel(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  return str
    .split('')
    .filter(x => !vowels.includes(x.toLowerCase()))
    .join('');
}

//Improved Solution: array function with regex using replace method to identify and remove vowels from string (+global +case-insensitive flags)
disemvowel = str => str.replace(/[aeiou]/gi,'');
