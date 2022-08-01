/*
You will be given an array of objects (associative arrays in PHP, table in COBOL) representing data about developers who have signed up to attend the next coding meetup that you are organising.

Your task is to return an object (associative array in PHP, table in COBOL) which includes the count of each coding language represented at the meetup.

For example, given the following input array:

var list1 = [
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C' },
  { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript' },
  { firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby' },
  { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C' },
];
your function should return the following object (associative array in PHP, table in COBOL):

{ C: 2, JavaScript: 1, Ruby: 1 }
Notes:

The order of the languages in the object does not matter.
The count value should be a valid number.
The input array will always be valid and formatted as in the example above.
*/

/*
P: parameters R: return value E: examples P: pseudocode

P: an array of objects. objects will be strictly formatted as shown in the example.
R: object containing key value pairs of programming languages and their count
E: given in the question
P: we apply the reduce method on the input array
    initialize the total as an empty object
    for each object in the array
        check if total has a key for the respective programming language
        if it does then add 1 to it
        otherwise create a key
    return total    

*/

//solution
function countLanguages(list) {
    return list.reduce((total, currentObj) => {
      total[currentObj.language] = (total[currentObj.language] || 0)+1
      return total
    },{})
  }