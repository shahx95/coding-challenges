/*
Write a function filterLucky/filter_lucky() that accepts a list of integers and filters the list to only include the elements that contain the digit 7.
*/

/*
E:
    filterLucky [1,2,3,4,5,6,7,68,69,70,15,17] => [7,70,17]

P:  apply filter array method on the input array 
        convert number to string and use includes method as a condition
    return the result of filter method    
*/

//solution
var filterLucky=x=>{
    return x.filter(number => String(number).includes("7"))
    }