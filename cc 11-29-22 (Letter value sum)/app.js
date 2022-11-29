/*
Assign every lowercase letter a value, from 1 for a to 26 for z. Given a string of lowercase letters, find the sum of the values of the letters in the string.
*/

/*
argument will always be a string. string can be empty. string will always contain letters and no other characters
*/

/*
examples: 
lettersum("") => 0
lettersum("a") => 1
lettersum("z") => 26
lettersum("cab") => 6
lettersum("excellent") => 100
lettersum("microspectrophotometries") => 317
*/

/*
split the input string and use charCodeAt with reduce to get the total 
*/

/*
Solution
*/

const lettersum = s => [...s].reduce((a, b) => a + (b.charCodeAt(0) - 96), 0)