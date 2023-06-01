/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.
*/

/*
Example 1:
Input: s = "anagram", t = "nagaram"
Output: true

Example 2:
Input: s = "rat", t = "car"
Output: false
*/

//Solution
function validAnagram(word1, word2){
    if(word1.length !== word2.length){
        return false
    }
    let characterFrequency1 = {} //space complexity of O(m) where m is the number of unique characters in word1
    let characterFrequency2 = {} //space complexity of O(m) where m is the number of unique characters in word2
    for(let i=0;i<word1.length;i++){  //time complexity of O(n) where n is the number of characters in word1
        characterFrequency1[word1[i]] = (characterFrequency1[word1[i]] || 0) + 1
        characterFrequency2[word2[i]] = (characterFrequency2[word2[i]] || 0) + 1
    }
    for(let key in characterFrequency1){
        if(characterFrequency1[key] !== characterFrequency2[key]){
            return false
        }
    }
    return true
}

//can we do it with O(1) space complexity?
//by trying to sort the two strings and then compare do direct comparison? O(nlogn) time complexity

function validAnagramViaSort(word1, word2) {
    const sortedWord1 = word1.split('').sort().join('');
    const sortedWord2 = word2.split('').sort().join('');
  
    return sortedWord1 === sortedWord2;
  }
  
