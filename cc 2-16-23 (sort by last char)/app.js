/*
 Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.
 If two words have the same last letter, they returned array should show them in the order they appeared in the given string.
 All inputs will be valid.
*/

//inputs will be strings of words separated by space
//output will be an array of words sorted by their respective last character

//examples

//time complexity: O(n log n), where n is the length of the input string x. This is because the function splits the input string into an array of words, which takes O(n) time, and then sorts the array using the built-in sort function, which has a time complexity of O(n log n). 

//space complexity:  O(n), where n is the length of the input string x. This is because the function splits the input string into an array of words and then returns the sorted array. 

function lastSort(x){

    //split string by space into array of words
    //sort using last char's code 
    return x.split(" ")
            .sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1)); 
   }