/*
Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
*/

/*
Example 1:
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Example 2:
Input: strs = [""]
Output: [[""]]

Example 3:
Input: strs = ["a"]
Output: [["a"]] 
*/

//will there be anagrams for all strings? -> no
//will there be an empty array? 
//what if a string has no anagram? -> group the string by itself

//solution
function groupAnagrams(arr){
    let anagramGroup = {}
    for(let str of arr){ //O(n)
        let sortedStr = str.split('').sort().join('') //O(mlogm)
        if(anagramGroup[sortedStr]){ //O(1)
            anagramGroup[sortedStr].push(str) //O(1)
        } else {
            anagramGroup[sortedStr] = [str]
        }
    }

    return Object.values(anagramGroup)
}

// time complexity of O(n * mlogm)
//space complexity of O(n * k) where n is number of keys in object and k is number of elements inside the value array


//follow up: do you have any other way to approach this without using sort?

//solution - instead of sorting, we use alphabet sequence to create keys for grouping anagrams
function groupAnagrams2(arr){
    
    let anagramGroup = {}
    
    for(let word of arr){
        
        let key = Array(26).fill(0)
        
        for(let i=0;i<word.length;i++){
            let index = word.charCodeAt(i) - 97
            key[index] += 1
        }
        
        key = key.join("-")
        
        if( anagramGroup[key] ) {
            anagramGroup[key].push(word)
        } else {
            anagramGroup[key] = [word]
        }

    }
    return Object.values(anagramGroup)
}