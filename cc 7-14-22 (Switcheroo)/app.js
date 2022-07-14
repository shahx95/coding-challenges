/*
Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.
*/

/*
P: parameters R: return value E: examples P: pseudocode

P: string of alphabet characters a,b and c.
R: string
E:
        'acb' --> 'bca'
        'aabacbaa' --> 'bbabcabb'
P:
    split the input string into an array of characters
    iterate through the array using map
        check if character is a and return b
        else if character is b and return a
        else return c
    join the array returned by map to form a switcheroo string
    return the string    

*/

//solution
function switcheroo(x){
    return x.split("").map( character => {
      if(character==='a') {return 'b'}
      else if(character === 'b') {return 'a'}
      else return 'c'
    }).join("")
  }