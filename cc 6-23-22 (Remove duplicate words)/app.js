/*
Your task is to remove all duplicate words from a string, leaving only single (first) words entries.
*/


/*
P: parameters R: return value E: examples P: pseudocode

P: function accepts a string
R: function returns a string
E:
        removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta')
        => 'alpha beta gamma delta'
P:
    split the string into an array of words
    use Set constructor to get the unique words
    convert the set to an array
    join the array with space delimiter
    return
*/

//solution
function removeDuplicateWords(str){
    return Array.from(new Set(str.split(" "))).join(" ")
}