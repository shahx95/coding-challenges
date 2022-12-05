/*
Given a string of words or phrases, count the number of vowels.
*/

//input will always be a string

//return integer

/*
Use reduce to iterate and count after comparing with a string of vowels. linear time complexity and constant space complexity because every character needs to be checked and temporary primitives are negligible.
*/

//solution
const vowels = str => [...str].reduce((total,current) => total+=("aeiou".includes(current.toLowerCase())? 1:0),0)