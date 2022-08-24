/*
Modify the kebabize function so that it converts a camel case string into a kebab case.
*/
/*
P: parameters R: return value E: examples P: pseudocode

P: string
R: string
E:
    kebabize('camelsHaveThreeHumps') => camels-have-three-humps
    kebabize('camelsHave3Humps') => camels-have-humps
P:
    split the input string into an array of letters
    apply map on the split array
        for each letter, check if its Not a Number
            if true, check if the letter is uppercase and not the first letter of the array
                if true, if index is 0 just convert it to lower case otherwise convert it to lowercase and add a hyphen before it
                else convert the letter to lowercase
    join the map result and store in a result variable             
    remvoe any preceding hyphen from result string
    return the result             
*/
//solution
function kebabize(str) {
    
    let result = [...str].map((element,index) => {
      
      if(isNaN(element)){
   
        
        
        
        return element.toUpperCase() === element && index!=0? index===0? element.toLowerCase: `-${element.toLowerCase()}` :element.toLowerCase()
      }
   
    }).join("") 
    if(result[0]==="-"){
      return result.slice(1)
    }
    else return result
  }