/*
The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.
*/

/*
P: parameters R: return value E: examples P: pseudocode

P:  function will take an array of arrays as an input. each element array will have a length of 2
R:  funcion will return an array of string elements
E:

        input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
        output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]
P:
    Apply map on the input
    For each element, check the 0 index for age and check the 1 index for handicap
    if age>=55 and handicap>7 , return senior
    else return open

*/

//solution
function openOrSenior(data){
    // ...
    let output = data.map( array => {
      if(array[0]>=55 && array[1]>7){
        return "Senior"
      }
      return "Open"
    })
    return output
  }