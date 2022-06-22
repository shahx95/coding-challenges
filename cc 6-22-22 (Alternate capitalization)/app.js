/*
Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.
The input will be a lowercase string with no spaces.
*/

/*
P: parameters R: return value E: examples P: pseudocode

P: function takes a string as an input. the provided string will always be lowercase and have no spaces
R: function will return an array of strings
E:
        capitalize("abcdef") => ['AbCdEf', 'aBcDeF']
P: 
    split the string into an array of characters
    create variable to hold odd capitalized string and even capitalized string
    assign respective variable to map string array:
        loop through the characters and for the respective variable, only uppercase characters with respective variable (odd or even) index. 
        join the return
    return an array with odd and even variables as its elements    
*/

//solution
    function capitalize(str){
        let splitStr = str.split("")
        let odd = splitStr.map( (element,index) => index%2? element.toUpperCase(): element ).join("")
        let even = splitStr.map( (element,index) => index%2===0? element.toUpperCase(): element ).join("")
        return [odd,even]
    }

// picking my brains:
    function capitalize(str){
        return [0,1].map( oddEven => [...str].map( (element,index) => index%2===oddEven?element.toUpperCase():element).join(''))
    }