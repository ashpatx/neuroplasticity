//Description: In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

/*Pseudocode:
1. create map object for each DNA base nucleotide complement
2. split input dna string into array of characters (DNA base nucleotides)
3. use map method to iterate on each nucleotide in array and find its complement using defined object of pairs
4. join into a string and return
*/

//Solution:
function DNAStrand(dna){
  const DNAMap ={
    'A':'T',
    'G':'C',
    'C':'G',
    'T':'A'
  }
  return dna.split('').map(el => DNAMap[el]).join('');
}

//Improved Solution: use replace method to directly replace nucleotide with complement
function DNAStrand(dna) {
  return dna.replace(/./g, function(c) {
    return DNAStrand.pairs[c]
  })
}

DNAStrand.pairs = {
  A: 'T',
  T: 'A',
  C: 'G',
  G: 'C',
}
