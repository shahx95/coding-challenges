/*
Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

For example, if this array were passed as an argument:

["Telescopes", "Glasses", "Eyes", "Monocles"]

Your function would return the following array:

["Eyes", "Glasses", "Monocles", "Telescopes"]

All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.
*/


/*
P: parameters R: return value E: examples P: pseudocode

P: function takes an array as an input. if input is not an array return invalid input

R: return an array  
E: 
    ["Beg", "Life", "I", "To"] => ["I", "To", "Beg", "Life"]
    ["Longer", "Longest", "Short"] => ["Short", "Longer", "Longest"]
     
P: 
    create a function that accepts an array 
    use the sort method and instead of sorting the values, sort their length using .length
    return the result of sort

*/

//Solution
function sortByLength (array) {
    if(Array.isArray(array)){
        // Return an array containing the same strings, ordered from shortest to longest
        return array.sort( (a,b) => a.length-b.length ) 
    }
    else return "Invalid input"
  };

  //for further improvement we can validate each array element for being of string type since length will throw an error on other types like number 
  //or null