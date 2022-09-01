/*
To participate in a prize draw each one gives his/her firstname.

Each letter of a firstname has a value which is its rank in the English alphabet. A and a have rank 1, B and b rank 2 and so on.

The length of the firstname is added to the sum of these ranks hence a number som.

An array of random weights is linked to the firstnames and each som is multiplied by its corresponding weight to get what they call a winning number.
Now one can sort the firstnames in decreasing order of the winning numbers. When two people have the same winning number sort them alphabetically by their firstnames.

Task:
parameters: st a string of firstnames, we an array of weights, n a rank

return: the firstname of the participant whose rank is n (ranks are numbered from 1)

The weight array is at least as long as the number of names, it may be longer.

If st is empty return "No participants".

If n is greater than the number of participants then return "Not enough participants".
*/



/*
P: parameters R: return value E: examples P: pseudocode

P:
R:
E:
    names: "COLIN,AMANDBA,AMANDAB,CAROL,PauL,JOSEPH"
    weights: [1, 4, 4, 5, 2, 1]
    n: 4

    The function should return: "PauL"
P:
    check if string is not empty and n is not greater than the participants

    after validating inputs, 
        split the input string by "," to get the list of names
        use map to create an array of arrays [firstName, som*weight[index]]
        then use sort based on the som*weight[index] values for each element
        return the sorted array's nth element's firstName value
*/


//solution
function rank(str, weight, n) {
  
    if(! str){return "No participants"}
    
    else if (n>str.split(",").length){return "Not enough participants"}
    else{
       
    let somArray = str.split(",").map( (firstName,index) => {
      let som = firstName.length + [...firstName].reduce((total, current) => total + current.toUpperCase().charCodeAt(0) - 64, 0) 
      return [firstName, som*weight[index]]
    })
     
    somArray.sort((a,b) => {
              if (a[1] > b[1]) return -1;
              if (a[1] < b[1]) return +1;
              if (a[0].toLowerCase() < b[0].toLowerCase()) return -1;
              if (a[0].toLowerCase() > b[0].toLowerCase()) return +1;
              return 0; // equal   
    })
     
    return somArray[n-1][0]
    }
    
  }