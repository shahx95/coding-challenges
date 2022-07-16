/*
You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising. The list is ordered according to who signed up first.

Your task is to return one of the following strings:

< firstName here >, < country here > of the first Python developer who has signed up; or
There will be no Python developers if no Python developer has signed up.
*/

/*
P: parameters R: return value E: examples P: pseudocode

P: array of objects
R: string
E:
var list1 = [
  { firstName: 'Mark', lastName: 'G.', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
  { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Python' },
  { firstName: 'Emma', lastName: 'B.', country: 'Norway', continent: 'Europe', age: 19, language: 'Clojure' }
] 

getFirstPython(list1) => "Victoria, Puerto Rico"

P:
    Use the find method to get the first instance of python developer in the array
    use a conditional 
    if a python developer is found then return its firstName and country
    otherwise return a string saying there will be no Python developers

*/

//solution

function getFirstPython(list) {
    let pythonDev=list.find(obj => obj.language==='Python')
   return pythonDev?`${pythonDev.firstName}, ${pythonDev.country}`:'There will be no Python developers'
 }