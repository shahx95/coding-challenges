//Given two strings s and t, return true if t is an anagram of s, and false otherwise.
//An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

//examples
isAnagram("anagram","nagaram") //true
isAnagram("rat","cat") //false

//Solution
function isAnagram(s, t){
    if(s.length !== t.length){return false}
    let sortedS = [...s].sort().join("")
    let sortedT = [...t].sort().join("")

    if(sortedS === sortedT){
        return true
    }
    return false
}

//Time complexity will be O(nlogn) since we are using sort O(nlogn + nlogn = 2nlogn = nlogn) 
//Space complexity will be O(n + m) where n and m are the number of characters in the input strings 
//if time complexity is more important than space complexity, the hash table solution would be a better choice