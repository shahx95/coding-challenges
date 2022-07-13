/*
Given an array/list [] of n integers , Separate The even numbers from the odds , or Separate the men from the boys
Return an array/list where Even numbers come first then odds

Since , Men are stronger than Boys , Then Even numbers in ascending order While odds in descending .

Array/list size is at least 4 .

Array/list numbers could be a mixture of positives , negatives .

Have no fear , It is guaranteed that no Zeroes will exists .!alt
Repetition of numbers in the array/list could occur , So (duplications are not included when separating).
*/


/*
P: parameters R: return value E: examples P: pseudocode

P: an array of integers. 0>integer>=0. array size >= 4. 
R: array of integers
E:
        menFromBoys ({7, 3 , 14 , 17}) ==> return ({14, 17, 7, 3}) 
        menFromBoys ({49 , 818 , -282 , 900 , 928 , 281 , -282 , -1 }) ==> return ({-282 , 818 , 900 , 928 , 281 , 49 , -1})
        menFromBoys ({-94, -99 , -100 , -99 , -96 , -99 }) ==> return ({-100 , -96 , -94 , -99})
P:
    initialize 2 arrays to store odd and even integers
    interate through the input array
        check if value is odd and is not in the odd array
            push the value to the odd array
        else check if value is not in odd and push in even array
    after iteration, sort odd and even holding array accordingly
    return even.concat(odd)         

*/



//solution
function menFromBoys(arr){
  let even = [], 
      odd = []
  arr.forEach( element => {
    if(element%2 && !odd.includes(element)) {odd.push(element)}
    else if(!even.includes(element) && !odd.includes(element)){ even.push(element) }
  } )
  even.sort( (a,b) => a-b )
  odd.sort( (a,b) => b-a )
  return [...even,...odd]
}