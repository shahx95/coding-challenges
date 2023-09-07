/*Given a variable n,

If n is an integer, Return a string with dash'-'marks before and after each odd integer, but do not begin or end the string with a dash mark. If n is negative, then the negative sign should be removed.

If n is not an integer, return the string "NaN".*/

/*
E:
    dashatize(274) -> '2-7-4'
    dashatize(6815) -> '68-1-5'
P: 
    check for integer else return NaN

    if absolute value of integer is of length 1, then return it

    convert num to string and then array
        use map on this array to add - to each odd number which is not first or last index
        for first or last index odd numbers, add - to only its right or only its left respectively
    
    join the mapped array to a string

    remove any double dashes
    
    return the string 
*/

//solution

function dashatize(num) {
    //check if num is an integer
    if(Number.isInteger(num)){
      
      //convert num to an array for array manipulation
      let numToArr = [...String(Math.abs(num))]
      
      //check if it is a single digit num 
      if(numToArr.length === 1){return numToArr.join("")}
      
      //adding dashes to odd numbers
      //edgecases - index 0 and last index
      //returning the mapped array to a result variable
      let result = numToArr.map((digit,index,arr) => {
        if(index!==0 && index!==(arr.length-1)){
          if(+digit % 2){
            return `-${digit}-`
          }
          else return digit
        }
        else{
          if(index===0 && digit%2){
            return `${digit}-`
          }
          else if(index===arr.length-1 && digit%2){
            return `-${digit}`
          }
          else return digit
        }
      })
      
      //converting mapped array to a string
      let resultString = result.join("")
      
      //removing any double dashes
      while(resultString.includes("--")){
         resultString = resultString.replace("--","-") 
      } 
      
      return resultString
    }
    
    //if num is not an integer
    else return 'NaN'
  }