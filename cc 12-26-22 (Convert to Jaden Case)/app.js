/*
Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.
*/

/*
    split the string into an array of words
    use map to loop through all the words and change the first letter to uppercase for each word
    join the new array returned by map
    return the string formed after joining the map array    
*/

//solution
String.prototype.toJadenCase = function () {
    //...
    return this.split(" ").map(element => {
      
      return element[0].toUpperCase()+element.slice(1)
    }).join(" ")
  };