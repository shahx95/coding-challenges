// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
    let strArr = str.split('')
    let xs = 0
    let os = 0
    for(i=0;i<strArr.length;i++){
      if(strArr[i] === "x" || strArr[i] === "X"){
        xs += 1
      } else if (strArr[i] === "o" || strArr[i] === "O"){
        os += 1
      }
    }
    return xs === os
}