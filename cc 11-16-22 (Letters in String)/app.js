/*
In this kata, you've to count lowercase letters in a given string and return the letter count in a hash with 'letter' as key and count as 'value'. The key must be 'symbol' instead of string in Ruby and 'char' instead of string in Crystal.
*/


/*
P: parameters R: return value E: examples P: pseudocode

P: string
R: object
E:
    letter_count('arithmetics') //=> {"a": 1, "c": 1, "e": 1, "h": 1, "i": 2, "m": 1, "r": 1, "s": 1, "t": 2}

P:
    split string into an array of characters using split method or spread operator
    apply reduce method with total initialzied as an empty object
        for each character, create a key and initialize it to 0. add 1 everytime if appears
    return the object returned by the reduce method     
*/


//solution
function letterCount(s){
    return [...s].reduce((total,current) => {
      total[current] = (total[current] || 0) + 1
      return total
    },{})
  }