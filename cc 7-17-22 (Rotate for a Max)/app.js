/*
Write function max_rot(n) which given a positive integer n returns the maximum number you got doing rotations similar to the above example.

So max_rot (or maxRot or ... depending on the language) is such as:

max_rot(56789) should return 68957

max_rot(38458215) should return 85821534
*/

/*
P: parameters R: return value E: examples P: pseudocode

P: integer. positive.
R: integer
E:
        max_rot(56789) => 68957
        max_rot(38458215) => 85821534
P:
    convert the number into a string
    split the string number into an array
    iterate through the array
        use slice to take out and rearrange the strings

    use Math.max() to find the maximum value in the list and if there is no value it will return null
*/


//solution
function maxRot(n) {
    var str = n.toString();
    var arr = [str];
    for (var i=0;i<=str.length-1 ;i++){
        str = str.slice(0,i)+str.slice(i+1)+str[i];
        arr.push(str.split().join());
    }
    return Math.max.apply(null, arr);
}