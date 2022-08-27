/*

dataand data1 are two strings with rainfall records of a few cities for months from January to December. The records of towns are separated by \n. The name of each town is followed by :.

data and towns can be seen in "Your Test Cases:".

Task:
function: mean(town, strng) should return the average of rainfall for the city town and the strng data or data1 (In R and Julia this function is called avg).
function: variance(town, strng) should return the variance of rainfall for the city town and the strng data or data1.

*/

/*
P: parameters R: return value E: examples P: pseudocode

P: two strings: one for the town and one for the data
R: integer or float
E: 
    mean("London", data), 51.19(9999999999996) 
    variance("London", data), 57.42(833333333374)
P:
    create a dataToArr function to extract the data array for the values of rainfall
    create a extractCities function to extract the city names

    create a function for mean
        within the function check if the city exists by calling the extractCities function and using .includes method
        if city does not exist return -1
        
        call the dataToArr function and use the reduce method on the array returned to get the total rainfall
        use .length on the array returned by dataToArr to get total items
        divide total rain by total items to get mean

    create a function for variance
        within the function check if the city exists by calling the extractCities function and using .includes method
        if city does not exist return -1    

        call extractedData to get the array of rain data
        get the squared difference using the typical variance formula through the map method
        use reduce and length on the squared difference to get the variance
*/
//solution

//without using regex

function dataToArr(town, data){
    return data.split("\n")
            .filter(arr => arr.includes(town))[0]
            .split(":")[1]
            .split(",")
            .map(element => Number(element.split(" ")[1]))
  }
  
  function extractCities(data){
    return data.split("\n").map(element => element.split(":")[0])
  }
  function mean(town, strng) {
      
      if(! extractCities(strng).includes(town)){return -1} 
      let extractedData = dataToArr(town,strng)
      let total = extractedData.reduce((total,current) => total+current,0)
      return total/extractedData.length
  }
  function variance(town, strng) {
     if(! extractCities(strng).includes(town)){return -1} 
     const average = mean(town, strng);
     let extractedData = dataToArr(town,strng)
     const squareDiffs = extractedData.map((value) => {
          const diff = value - average;
          return diff * diff;
      });
      return squareDiffs.reduce((total,current) => total+current,0) / squareDiffs.length;
       
  }