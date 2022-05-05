/*
Remove n exclamation marks in the sentence from left to right. n is positive integer.

P: paramenters R: return value E: examples P: pseudonym

P: function will take a string and an integer value. we need to take care that the value provided is an integer and is positive
R: function will return a string
E:
    remove("Hi!",1) === "Hi"
    remove("Hi!",100) === "Hi"
    remove("!!!Hi !!hi!!! !hi",5) === "Hi hi!!! !hi"
    remove("!!!Hi !!hi!!! !hi",100) === "Hi hi hi"
P:  
    create a function with 2 parameters for the 2 inputs
    use a loop that continues until n value is reached
    use replace method to remove '!'
    return the string
*/

function remove(s,n){
    if(n>0){//to take care of edge cases
    while(n) {
        s = s.replace("!", "");
        n--;
      }
      return s;
    }
}


