// Write a program to determine if a string contains only unique characters. Return true if it does and false otherwise.

// The string may contain any of the 128 ASCII characters. Characters are case-sensitive, e.g. 'a' and 'A' are considered different characters.

function hasUniqueChars(str){
    let newArr = [];
    for(i = 0; i < str.length; i++){
      if(str.indexOf(str[i]) !== str.lastIndexOf(str[i])){
        newArr.push(str[i]);
      }
    }
    if (newArr.length > 0){
      return false;
    } else {
      return true;
    }
  }