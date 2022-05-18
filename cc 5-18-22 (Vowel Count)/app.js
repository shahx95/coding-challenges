/*
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.

*/


/*
P: parameters R: return value E: examples P: pseudocode

P: function takes a string only. no other input type is expected
R: return an integer value 
E:
    getCount("abracadabra") => 5
    getCount("aloha") => 3
    getCount("rhythm") => 0
P:
    validate the input type
    create an array of vowels
    split the input string into an array
    use a for loop to compare each array element with elements in the vowel array
    increase the count for every comparison that is true
    return the count    
*/

//solution
function getCount(str) {
    let vowelsCount = 0;
    
    // magic happens here
    if(typeof(str)==='string'){
        vowels = ['a','e','i','o','u']
        for(let element of str.split('')){
          if(vowels.includes(element)){
            vowelsCount++
          }
        }
        return vowelsCount;        
    }
    else return "Invalid Input"
  }

// another solution using the reduce method
//   function getCount(str) {
//     let vowelsCount = 0;
    
//     // using reduce method
//     vowelsCount = str.split('').reduce( (total,element) => {
//       if(['a','e','i','o','u'].includes(element)){
//         return total = total + 1
//       }
//       else return total
//     },0 )
    
//     return vowelsCount;
//   }