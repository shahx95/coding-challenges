/*
Implement a function, so it will produce a sentence out of the given parts.

Array of parts could contain:

words;
commas in the middle;
multiple periods at the end.
Sentence making rules:

there must always be a space between words;
there must not be a space between a comma and word on the left;
there must always be one and only one period at the end of a sentence.
*/
/*
P: parameters R: return value E: examples P: pseudocode

P:  array
R:  string
E:
    makeSentence(['hello', ',', 'my', 'dear']) => 'hello, my dear.'
P:  
    use the reduce method on the parts array and return a sentence
        for each part, check if its a comma, period or a word
        if its a comma, concat it without any space
        if its a period, ignore it since we only want a period at the end
        if its a word, concat it with a space
    return the string returned by reduce method with a period at the end    

*/

//solution
function makeSentence(parts) {
    return parts.reduce((sentence,part) => {
      if(part === ","){sentence = sentence + part}
      else if(part === "."){sentence}
      else{
        sentence = sentence + " " + part
      }
      return sentence
    }).concat(".")
  }