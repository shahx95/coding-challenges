/*
Write a function called prankCall that takes two arguments: a phone number and a message. The function should simulate a prank phone call by printing the message to the console with a delay of 1 second between each character. The phone number should also be printed to the console with a delay of 500 milliseconds between each digit.

For example, if the input phone number is "555-1234" and the message is "Hello, is your refrigerator running?", the output might be:

Dialing... 5... 5... 5... -... 1... 2... 3... 4...
H e l l o ,   i s   y o u r   r e f r i g e r a t o r   r u n n i n g ?
*/

//input: takes in two arguments, a phoneNumber and a message. will phone number be a string or a integer? 
//output: returns a string that includes the formatted phone number and message with dots and spaces added in between

//solution
function prankCall(phoneNumber, message) {
    let phoneDotted = String(phoneNumber).split("").join("... ") //converting phoneNumber to string 
    let messageSpaced = message.split("").join(" ")
    return `Dialing... ${phoneDotted}\n${messageSpaced}`
  } 

//examples
prankCall('555-5555', 'Hey, is your refrigerator running?')
// Output:
// Dialing... 5... 5... 5... -... 5... 5... 5... 5...
// H e y ,   i s   y o u r   r e f r i g e r a t o r   r u n n i n g ?

prankCall('123-4567', 'This is a prank call!')
// Output:
// Dialing... 1... 2... 3... -... 4... 5... 6... 7...
// T h i s   i s   a   p r a n k   c a l l !

prankCall('555-1212', 'Why did the chicken cross the road?')
// Output:
// Dialing... 5... 5... 5... -... 1... 2... 1... 2...
// W h y   d i d   t h e   c h i c k e n   c r o s s   t h e   r o a d ?

  