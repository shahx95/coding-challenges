/*
Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
*/

/*
P: parameters R: return E: examples P: pseudocode

P: function takes two strings of only letters
R: function returns a string
E:
        a = "xyaabbbccccdefww"
        b = "xxxxyyyyabklmopq"
        longest(a, b) -> "abcdefklmopqwxy"

        a = "abcdefghijklmnopqrstuvwxyz"
        longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
P:
    separate all characters using string and put them in a single array
    use the Set operator to get rid of the duplicates
    use the sort method to sort the unique characters
    use the join method to get a string again
    return the string         
*/

//solution
function longest(s1, s2) {
    // your code
    let newArray = s1.split('').concat(s2.split('')) //put all values in a single array
    let uniqueArray = [...new Set(newArray)] //get the unique values
    return uniqueArray.sort().join('') //sort and join to return a sorted string
  }