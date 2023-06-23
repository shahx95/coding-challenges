/*
Your task is to remove all duplicate words from a string, leaving only single (first) words entries.
*/


/*
function accepts a string
function returns a string
Example:
        removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta')
        => 'alpha beta gamma delta'
Pseudocode:
    split the string into an array of words
    use Set constructor to get the unique words
    convert the set to an array
    join the array with space delimiter
    return
*/

//solution
function byeDuplicates(str){
    return Array.from(new Set(str.split(" "))).join(" ")
}

//can also use filter and indexOf with lastIndexOf?