/*
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.
*/

/*
Example 1:
Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.

Example 2:
Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.

Example 3:
Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
*/

//solution
//"A man, a plan, a canal: Panama"
function validPalindrome(str){
    //convert to lowercase
    const strLower = str.toLowerCase() //o(n)
    // const alphaNumerical = "abcdefghijklmnopqrstuvwxyz0123456789"
    //using charCodeAt instead of alphaNumerical.includes(strLower[left]) for better time complexity
    let left = 0, right = strLower.length-1
    while(left<=right){
        while(left<=right && !((strLower.charCodeAt(left) >= 97 && strLower.charCodeAt(left) <= 122) || (strLower.charCodeAt(left) >= 48 && strLower.charCodeAt(left) <= 57)) ){ //o(1)
            left++
            // console.log(`left is ${left}`)
        }
        while(left<=right && !((strLower.charCodeAt(right) >= 97 && strLower.charCodeAt(right) <= 122) || (strLower.charCodeAt(right) >= 48 && strLower.charCodeAt(right) <= 57)) ){ //o(1)
            right--
            // console.log(`right is ${right}`)
        }
        if(strLower[left] !== strLower[right]){ //o(1)
            return false
        }
        left++
        right--
    }
    return true
}

//The time complexity of the validPalindrome function is O(N), where N is the length of the input string str.

//The space complexity of this function is also O(N), because it creates a new string strLower that is the same length as the input string, and it also creates a constant string alphaNumerical that is 36 characters long. The space used by the two pointers left and right is also constant.

