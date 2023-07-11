/*
Given a string s. You have to return another string such that even-indexed and odd-indexed characters of s are grouped and groups are space-separated (see sample below)
*/

/*
E:
        input: 'CodeWars'
        output 'CdWr oeas'
P:
    create an even array variable
    create an odd array variable
    split the input string to an array
        iterate through this array
        for every character, if index is odd push the character to the odd array
        else push it to the even array
    join and return even + " " + odd    
*/

//solution

function sortMyString(S) {
    let even = []
    let odd = [" "]
    S.split("").forEach((character,index) => {
      if(index%2){
        odd.push(character)
      }
      else{
        even.push(character)
      }
    })
    return even.concat(odd).join("")
}