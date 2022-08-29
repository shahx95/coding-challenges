/*
You will be given a sequence of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

Your task is to return a sequence which includes the developer who is the oldest. In case of a tie, include all same-age senior developers listed in the same order as they appeared in the original input array.

The input array will always be valid and formatted as in the example above and will never be empty.
*/

/*
P: parameters R: return value E: examples P: pseudocode

P: array of objects
R: array of objects
E:
    var list1 = [
    { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
    { firstName: 'Odval', lastName: 'F.', country: 'Mongolia', continent: 'Asia', age: 38, language: 'Python' },
    { firstName: 'Emilija', lastName: 'S.', country: 'Lithuania', continent: 'Europe', age: 19, language: 'Python' },
    { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
    ];
    =>
    [
    { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
    { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
    ]
P:
    create a variable to store the max age. initialise it with the age value of the first object
    use a forEach loop to iterate through all objects
        in every iteration check if the age is greater than the max age in our variable
        if age is greater, replace the max age with the greater value
    
    after forEach loop completes, apply filter on the list to get items with the max age and return the filtered array      

*/


//solution

function findSenior(list) {
    let ageMax = list[0].age
     
    list.forEach(obj => {
       if(obj["age"] > ageMax){
         ageMax = obj["age"]
       }
     })
    
    return list.filter(obj => obj["age"]===ageMax)
  }