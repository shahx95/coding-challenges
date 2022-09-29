/*
Each exclamation mark's weight is 2; each question mark's weight is 3. Putting two strings left and right on the balance - are they balanced?

If the left side is more heavy, return "Left"; if the right side is more heavy, return "Right"; if they are balanced, return "Balance".
*/

/*
P: parameters R: return value E: examples P: pseudocode

P: string
R: string
E:
        "!!", "??"     -->  "Right"
        "!??", "?!!"   -->  "Left"
        "!?!!", "?!?"  -->  "Left"
        "!!???!????", "??!!?!!!!!!!"  -->  "Balance" 
P:
    create an object storing the weight values for ! and ?
    split the input arguments and use reduce to calculate the weight of each side
    compare the result and return the appropiate value
*/

//solution
function balance(left,right){
    const weight = {'!':2, '?':3}
    const leftWeight = left.split("").reduce((total,current) => total+weight[current],0)
    const rightWeight = right.split("").reduce((total,current) => total+weight[current],0)
    console.log(leftWeight,rightWeight)
    return leftWeight===rightWeight? "Balance" : leftWeight>rightWeight? "Left" : "Right"
  }