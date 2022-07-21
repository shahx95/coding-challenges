/*
Write a function that removes every lone 9 that is inbetween 7s.
*/

/*
P: parameters R: return value E: examples P: pseudocode

P: string of digits
R: string of digits
E:
    "79712312" --> "7712312"
    "79797"    --> "777"
P:
    split the string into an array
    apply filter method
    filter all values but the value which is 9 AND has 7 ahead of it AND has 7 before it
    join the array returned by the filter
    return it
*/

//solution
function sevenAte9(str) {
    return str.split("").filter( (element,index) => {
      if(!(element==="9" && str[index-1]==="7" & str[index+1]==="7")){
        return element
      }
    }).join("")
  }