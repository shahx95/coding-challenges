// Given a string of characters as input, write a function that returns it with the characters reversed. No Reverse Method (well brute force it first, but then no reverse method)! 

//Does it take in special chars? Does capitalization matter? Will I ever be given an empty string? Will I ever be given anything besides a string? NO REVERSE METHOD.

//Should return a reversed string.

function reverseString(str){
    //   Split into array 
    let splitStr = str.split("")
    let reversedStr = ""
    for(let character of splitStr){
      reversedStr = character+reversedStr 
    }
    return reversedStr
}

//time complexity of O(n) 
//space complexity of O(n) since we are storing the characters in reversedStr 


console.log(reverseString('I am a bear.'), '.raeb a ma I')
console.log(reverseString('Unbreakable.'), 'elbakaerbnU')
console.log(reverseString('How much wood'), 'doow hcum woH')
