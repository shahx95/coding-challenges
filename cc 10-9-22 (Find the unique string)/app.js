/*
There is an array of strings. All strings contains similar letters except one. Try to find it!
Strings may contain spaces. Spaces are not significant, only non-spaces symbols matters. E.g. string that contains only spaces is like empty string.

It’s guaranteed that array contains more than 2 strings.
*/


/*
P: parameters R: return value E: examples P: pseudocode

P: array of strings
R: string
E:
        findUniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]) === 'BbBb'
        findUniq([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ]) === 'foo'
P:
    for each word in the array, convert them into a strings of unique characters using set and sort them
    since all strings except one will have the same unique characters, we can use indexOf and lastIndexOf comparison to find the odd one out
    return the odd one out 
*/


//solution
function findUniq(arr) {
    const uniqueArr = arr.map(element => [...new Set(element.toLowerCase())].sort().join())
    for(let word of uniqueArr){
      if(uniqueArr.indexOf(word) === uniqueArr.lastIndexOf(word)){
        return arr[uniqueArr.indexOf(word)]
      }
    }
  } 