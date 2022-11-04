/*
Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

If two words have the same last letter, they returned array should show them in the order they appeared in the given string.

All inputs will be valid.
*/

/*
P: parameters R: return value E: examples P: pseudocode

P: string of words. no funny business.
R: array of strings
E:
        last('man i need a taxi up to ubud'), ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']
        last('what time are we climbing up the volcano'), ['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what']
        last('take me to semynak'), ['take', 'me', 'semynak', 'to'] 
P:
    split string by space to create an array of words
    apply sort on the array
        compare the last character of each word using [length-1] to create an array in ascending order
    return sorted array    
*/

//solution
const last = str => str.split(" ")
                       .sort((a,b) => a[a.length-1] > b[b.length-1]? 1 : a[a.length-1] === b[b.length-1]? 1: -1)
                       