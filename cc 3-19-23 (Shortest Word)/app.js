/*
Write a function that takes in a string of words separated by spaces and returns the length of the shortest word.
*/

// function takes in a string of words separated by spaces 
// function returns an integer representing the length of the shortest word

//examples
shortestWordLength("The quick brown fox jumps over the lazy dog"); // Output: 3
shortestWordLength("I love JavaScript"); // Output: 1
shortestWordLength("Hello world"); // Output: 5


//solution
function shortestWordLength(str) {
    const words = str.split(' ') // Split the input string into an array of words using the split method
    let shortest = words[0].length // Create a variable shortest and set it to the length of the first word in the array
    // Iterate through the array of words using a for loop
    for (let i = 1; i < words.length; i++) {
      // For each word, check if its length is less than the current value of shortest
        if (words[i].length < shortest) {
        shortest = words[i].length //if it is update the value of shortest
      }
    }
    return shortest // Return the value of shortest
  }
  
