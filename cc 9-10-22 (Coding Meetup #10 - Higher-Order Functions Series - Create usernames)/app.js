/*

Given the input array, write a function that adds the username property to each object in the input array.

The value of the username property is composed by concatenating:

firstName in lower-case;
first letter of the lastName in lower-case; and
the birth year which for the purpose of this kata is calculated simply by subtracting age from the current year. Please make sure that your function delivers the correct birth year irrespective of when it will be executed, for example it should also work correctly for a meetup organised in 10-years-time. The example above assumes that the function is run in year 2020.

Notes:

The input array will always be valid and formatted as in the example above.
Age is represented by a number which can be any positive integer.
Lastname will always be one upper-cased letter followed by dot, e.g. 'N.'
Order of the objects in the array should be maintained but order of the properties in the individual objects does not matter.

*/

/*
P: parameters R: return value E: examples P: pseudocode

P: array of objects
R: array of objects
E:
var list1 = [
  { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby' },
  { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure' }
];
=>
[
  { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby', 
    username: 'emilyn1990' },
  { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure', 
    username: 'nore2000' }
]
P:  apply map on the input list
        for each object, add username as its key with generated username as its value
        to generate birth year, use the Date constructor with getFullYear method and the age
        concatenate first name in lowercase, first character of last name in lowercase and the birth year for username
    
    return mapped array     

*/
//solution

function addUsername(list) {
    return list.map(obj => {
      let yearNow = new Date().getFullYear()
      let birthYear = yearNow - obj["age"]
      let username = obj["firstName"].toLowerCase() + obj["lastName"][0].toLowerCase() + birthYear
      obj["username"] = username
      return obj
    })
    
  }