/*
Your task is to write a function which returns the sum of following series upto nth term(parameter).

Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
*/

/*
P: parameters R: return E: examples P: pseudocode

P: function will take an integer >= 0
R:  function will return an integer
E:  
        1 --> 1 --> "1.00"
        2 --> 1 + 1/4 --> "1.25"
        5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"
P:
    
    
    1/1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
    Denominator increases by 3 for each value
    create a denominator variable and assign it a value of 1 for the first value
    create a sum variable and assign it 0 for the start
    for i = 0 till n{
        if i === first term => sum = 1
        else:
            denominator = denominator + 3
            sum = sum + 1/denominator
    }
    use toFixed and toString on sum to return
*/

//solution
let SeriesSum = n => {
    let sum = 0
    let denominator = 1
    for(let i=0;i<n;i++){
      if(i===0){
        sum = 1
      }
      else{
      denominator = denominator + 3
      sum = sum + (1/denominator)
      }
    }
    return sum.toFixed(2).toString()
  }