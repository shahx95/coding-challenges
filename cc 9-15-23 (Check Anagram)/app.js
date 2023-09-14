// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

//examples
//example 1
const s1 = "anagram";
const t1 = "nagaram";
console.log(isAnagram(s1, t1), true);
//example 2
const s2 = "rat";
const t2 = "car";
console.log(isAnagram(s2, t2), false);

//solution
function isAnagram(str1, str2){
    if(str1.length !== str2.length){
        return false
    }
    let hashObj1 = {}
    for(let letter of str1){
        hashObj1[letter] = (hashObj1[letter] || 0) + 1
    }

    let hashObj2 = {}
    for(let letter of str2){
        hashObj2[letter] = (hashObj2[letter] || 0) + 1
    }

    for(let key in hashObj1){
        if(hashObj1[key] !== hashObj2[key]){
            return false
        }
    }

    return true
}

//time complexity of O(n), where n is the length of the input strings, as it iterates through the strings only once to count the characters' frequencies 
//space complexity of O(n) as well, because it creates hash objects to store the character frequencies, which can have at most n unique characters