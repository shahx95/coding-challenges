/*
Today I'd like you to write a function that takes in a given array of strings and move any entries containing the letter 'a' to the front, and then move any entries that have over 3 characters to the back. Please preserve the order of things while you do this!
*/


/*
P: parameters R: return value E: examples P: pseudocode

P: array
R: array
E:
    move(['hi', 'hello', 'howdy', 'hola', 'hej', 'hallo', 'heyyy']) => ['hola', 'hallo', 'hi', 'hej', 'hello', 'howdy', 'heyyy']
P:
    create three filters for the following conditions: words with a, word length less than 4 and words that dont meet the prior conditions
    concat the three filtered arrays and return

*/

//solution
function move(arr){
    return arr.filter(word => word.includes('a')).concat(arr.filter(word => word.length<=3)).concat(arr.filter(word => !word.includes("a") && !(word.length<4)))
}

