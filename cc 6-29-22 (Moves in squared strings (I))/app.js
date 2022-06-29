/*
You are given a string of n lines, each substring being n characters long: For example:

s = "abcd\nefgh\nijkl\nmnop"

We will study some transformations of this square of strings.

Vertical mirror: vert_mirror (or vertMirror or vert-mirror)
vert_mirror(s) => "dcba\nhgfe\nlkji\nponm"
Horizontal mirror: hor_mirror (or horMirror or hor-mirror)
 hor_mirror(s) => "mnop\nijkl\nefgh\nabcd"

 Task:
Write these two functions
and

high-order function oper(fct, s) where

fct is the function of one variable f to apply to the string s (fct will be one of vertMirror, horMirror)
*/


/*
P: parameters R: return value E: examples P: pseudocode

P: function takes a string as an input
R: function returns a string
E:
        s = "abcd\nefgh\nijkl\nmnop"
        oper(vert_mirror, s) => "dcba\nhgfe\nlkji\nponm"
        oper(hor_mirror, s) => "mnop\nijkl\nefgh\nabcd"
P:
    split the string by \n to remove \n and create an array

    verticle mirror reverses each group of element separated in the array and joins it back
    horizontal mirror reverses the array

    after the operation join the array elements by \n and return the new string
    

    
*/

//solution
const vertMirror = s => s.map(s => [...s].reverse().join(''));
const horMirror = s => s.reverse();

const oper = (fct, s) => fct(s.split("\n")).join("\n");