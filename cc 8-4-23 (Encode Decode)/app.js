// Design an algorithm to encode a list of strings to a string. The encoded string is then sent over the network and is decoded back to the original list of strings.

// Please implement encode and decode

// Example:
// Input: ["lint","code","love","you"]

// Output: ["lint","code","love","you"]

// Explanation:

// One possible encode method is: "lint:;code:;love:;you"

// Example 2:
// Input: ["we", "say", ":", "yes"]

// Output: ["we", "say", ":", "yes"]

// Explanation:

// One possible encode method is: "we:;say:;:::;yes"


function encode(arr){
    //["lint","code","love","you"]
    let result = ""
    for(let word of arr){
        result += `${word.length}#${word}`
    }
    return result
}

function decode(str) {
    let result = [];
    let i = 0;
    while (i < str.length) {
      let starting = i;
      while (str[i] !== "#") {
        i++;
      }
      let wordLength = Number(str.slice(starting, i));
      let word = str.slice(i + 1, i + 1 + wordLength);
      result.push(word);
      i = i + 1 + wordLength;
    }
    return result;
  }
  