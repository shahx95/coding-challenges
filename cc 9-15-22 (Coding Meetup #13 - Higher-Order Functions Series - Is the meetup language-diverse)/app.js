/*
You will be given an array of objects representing data about developers who have signed up to attend the next web development meetup that you are organising. Three programming languages will be represented: Python, Ruby and JavaScript.

Your task is to return either:

true if the number of meetup participants representing any of the three programming languages is ** at most 2 times higher than the number of developers representing any of the remaining programming languages**; or
false otherwise.
*/


/*
P: parameters R: return value E: examples P: pseudocode

P: array of objects
R: boolean
E:
    var list1 = [
    { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'Python' },
    { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'Ruby' },
    { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 43, language: 'Ruby' },
    { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 95, language: 'JavaScript' },
    { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 18, language: 'JavaScript' },
    { firstName: 'Joao', lastName: 'D.', country: 'Portugal', continent: 'Europe', age: 25, language: 'JavaScript' }
    ];
    returns
    false as the number of JavaScript developers (3) is 3 times higher than the number of Python developers (1). 
P:
    use reduce on the input array to get a count of the languages
    use Object.values on the object returned by the reduce method to get a list of the count
    check if half of the max value is less than or equal to the min value and return the result  
*/


//solution
function isLanguageDiverse(list) {
    let languages = list.reduce((total,current) => {
      total[current.language] = (total[current.language] || 0) + 1
      return total
    },{})
    
    let arr = Object.values(languages);
    let min = Math.min(...arr);
    let max = Math.max(...arr);
  
    return max/2 <= min 
    
  }