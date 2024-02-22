/*Description: In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123] */

/*Pseudocode:
1. filter method to create a new array that pass condition
2. condition function checks if type of current element is in the input list
3. if true, collect number - if false, mark 'false'
4. collect all elements for true and return in a new array (filtering out all false cases)
*/

//Solution: 
function filter_list(l) {
 return l.filter(v => typeof v == "number")
}
