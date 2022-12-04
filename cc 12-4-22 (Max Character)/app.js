/*
Given a string of characters, return the character that appears the most often.
*/


// does case matter? can string be empty? can string have multiple characters of equal frequency?


// use two separate loops for tallying character frequency and max character frequency. time complexity will be linear


//solution

function maxCharacter(str){

    //create a object that tallies the appearance of each character as we loop through the string
    const characters = [...str].reduce((total, current) => {
        total[current] = (total[current] || 0) + 1
        return total
    }, {})

    let maxCount = 0;
  let maxCharacter = null;

    //iterate through the object to find the character that has the largest counter
  for (let character in characters) {
    if (characters[character] > maxCount) {
      maxCount = characters[character];
      maxCharacter = character;
    }
  }

  return maxCharacter;
}