/*
You'll have to translate a string to Pilot's alphabet (NATO phonetic alphabet).

Note:

There are preloaded dictionary you can use, named NATO
The set of used punctuation is ,.!?.
Punctuation should be kept in your return string, but spaces should not.
Xray should not have a dash within.
Every word and punctuation mark should be seperated by a space ' '.
There should be no trailing whitespace
*/
/*
P: parameters R: return value E: examples P: pseudocode

P: string
R: string
E:
        Input:

        If, you can read?

        Output:

        India Foxtrot , Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta ?
P:
    split the argument string into characters
    apply map on the split array
        check if letter is in the NATO dictionary, punctuation list or is a space
        return accordingly
    join the mapped array and trim it
    return the joined and trimmed string    

*/


//solution
function to_nato(words) {
	return words.split("").map(letter => {
     return NATO[letter.toLowerCase()] ? `${NATO[letter.toLowerCase()]} ` 
                                       : letter === " " ? ""
                                       : ",.!?".includes(letter)? `${letter} ` 
                                       : letter
  }).join("").trim()
}

 