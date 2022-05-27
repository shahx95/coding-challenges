/*
Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

If you want to know more: http://en.wikipedia.org/wiki/DNA

In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

Example: (input --> output)
*/

/*
P: parameters R: return value E: examples P: pseudocode

P: function will take a string. 
R: will return a string
E:
    "ATTGC" --> "TAACG"
    "GTAT" --> "CATA"
P:
    create an object for the complements
    split the string into an array of characters
    use map to loop over each character and return an array of values from the object
    join the new array and return it

*/

//solutions
function DNAStrand(dna){
    //your code here
    let dnaArray = dna.split('')
    let complements = {A:'T',T:'A',C:'G',G:'C'}
    let otherComplementarySide = dnaArray.map( element => {
      return complements[element]
    }).join('')
    return otherComplementarySide
  }