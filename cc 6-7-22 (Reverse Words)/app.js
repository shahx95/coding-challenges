/*
Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
*/


/*
P: parameters R: return value E: examples P: pseudocode

P: function takes in a string only. all other input types are invalid
R: function returns a string
E: 
        "This is an example!" ==> "sihT si na !elpmaxe"
        "double  spaces"      ==> "elbuod  secaps"
P:
    "This is an example"
    Split the string into an array [T,h,i,s, ,i,s, ,a,n, ,e,x,a,m,p,l,e]
    Reverse the array ['e', 'l', 'p', 'm', 'a', 'x', 'e', ' ', 'n', 'a', ' ', 's', 'i', ' ', 's', 'i', 'h', 'T']
    Join the array 'elpmaxe na si sihT'
    Split the array per word [elpmaxe,na,si,sihT]
    Reverse the array [sihT, si, na, elpmaxe]
    Join the array 'sihT si na elpmaxe'
    return 
*/


//solution
function reverseWords(str) {
    str = str.split('').reverse().join('').split(' ').reverse().join(' ')
    return str
  }


//solve using a loop?
/*
"This is an example"
Split into an array of words ['This', 'is', 'an', 'example']
Use map to loop over each word:
  Split "This"
  Reverse "sihT"
  return
Join the map with a space delimiter
return  

return str.split(' ').map(element => element.split('').reverse().join('')).join(' ')
*/  