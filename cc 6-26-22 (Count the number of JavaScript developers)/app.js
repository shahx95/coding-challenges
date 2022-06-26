/*
You will be given an array of objects (hashes in ruby) representing data about developers who have signed up to attend the coding meetup that you are organising for the first time.

Your task is to return the number of JavaScript developers coming from Europe.

If, there are no JavaScript developers from Europe then your function should return 0.

Notes:

The format of the strings will always be Europe and JavaScript.
All data will always be valid and uniform as in the example above.
*/

/*
P: parameters R: return E: examples P: pseudocode

P: function accepts an array of objects. all input will be valid.
R: function returns an integer 
E:

var list1 = [
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
  { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
  { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
  { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
];

countDevelopers(list1) => 1

P:
   loop through the array element objects
   for each object
    if object continent value is europe and object language value is js 
        increase count by one
   return count      
*/


//solution

function countDevelopers(list) {
    return list.filter(x => x.continent == 'Europe' && x.language == 'JavaScript').length
  }

  