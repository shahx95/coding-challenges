/*
You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

Find max(abs(length(x) − length(y)))

If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).
*/

/*
P: parameters R: return value E: examples P: pseudocode

P: function takes two arrays of strings as input
R: function will return an integer
E:
        a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
        a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
        mxdiflg(a1, a2) --> 13
P:
    check if lengths of any array is 0 and return -1
    we will find the longest string and the shortest string in each array:
        use map to loop through each string in the array and get their lengths in a new array
        use Math.max and Math.min to find the longest and shortest values
    then we will subtract the longest string of one array with the shortest of the other array and vice versa within absolute function. 
    then return whichever value is larger
*/

//solution
    function maxLength(arr1,arr2){
        if(arr1.length===0 || arr2.length===0) {return -1}
        let arr1Length = arr1.map( element => element.length)
        let arr2Length = arr2.map( element => element.length)
        return Math.max(Math.abs(Math.max(...arr1Length)-Math.min(...arr2Length)),Math.abs(Math.max(...arr2Length)-Math.min(...arr1Length)))
    }