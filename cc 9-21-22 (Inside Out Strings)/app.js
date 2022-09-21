/*
You are given a string of words (x), for each word within the string you need to turn the word 'inside out'. By this I mean the internal letters will move out, and the external letters move toward the centre.

If the word is even length, all letters will move. If the length is odd, you are expected to leave the 'middle' letter of the word where it is.

An example should clarify:

'taxi' would become 'atix' 'taxis' would become 'atxsi'
*/


/*
P: parameters R: return value E: examples P: pseudocode

P: string   
R: string 
E: 'man i need a taxi up to ubud' => 'man i ende a atix up to budu'
P:
    split the string by space to get an array of words
    map the split array:
        for each word, split it by the middle and reverse both the parts. 
        if there is a character in the middle (odd length), add the character between the two reversed parts
        return after joining back to a string
    join the array returned by map by space and return the resulting string    
*/


//solution
function insideOut(x){
    let splitWord = x.split(' ')
    
    return splitWord.map(word => {
            let midpoint = word.length / 2 
  
            //start
            let start = word.slice(0,midpoint).split("").reverse().join("")
  
            //center
            let center = word.length % 2? word.charAt(midpoint) : ""
  
            //end
            let end = word.slice(Math.ceil(midpoint)).split("").reverse().join("")
             
            return start + center + end
      
            }).join(" ")
    
  }