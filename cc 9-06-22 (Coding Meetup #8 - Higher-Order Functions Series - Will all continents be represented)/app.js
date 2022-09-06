/*
You will be given a sequence of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.

Your task is to return:

true if all of the following continents / geographic zones will be represented by at least one developer: 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'.
false otherwise.


The input array and continent names will always be valid and formatted as in the list above for example 'Africa' will always start with upper-case 'A'.

*/


/*
P: parameters R: return value E: examples P: pseudocode

P:  array of objects
R:  boolean
E:
    var list1 = [
    { firstName: 'Fatima', lastName: 'A.', country: 'Algeria', continent: 'Africa', age: 25, language: 'JavaScript' },
    { firstName: 'Agustín', lastName: 'M.', country: 'Chile', continent: 'Americas', age: 37, language: 'C' },
    { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 39, language: 'Ruby' },
    { firstName: 'Laia', lastName: 'P.', country: 'Andorra', continent: 'Europe', age: 55, language: 'Ruby' },
    { firstName: 'Oliver', lastName: 'Q.', country: 'Australia', continent: 'Oceania', age: 65, language: 'PHP' },
    ];

    returns true

P:  
    create a array variable initialised with an empty array
    
    iterate over the input array and add a continent to the holding array if its not already there

    after iteration completes, returntrue if continent array length is 5 else return false
*/
//solution

function allContinents(list) {
    let continents = []
    list.forEach(obj => {
      if(! continents.includes(obj.continent)){
        continents.push(obj.continent)
      }
    })
    
    return continents.length===5? true : false
  }