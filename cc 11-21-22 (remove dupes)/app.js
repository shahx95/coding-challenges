/*
Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

"alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

--> "alpha beta gamma delta alpha beta gamma delta"
*/
/*
P: parameters R: return value E: examples P: pseudocode

P: string of words. no special characters. no numbers. 
R: string of words.
E:
alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

--> "alpha beta gamma delta alpha beta gamma delta"
P:
    use filter to only select elements that do not have adjacent  
*/
//solution
const removeDupes = str => str.split(" ").filter((word, index, arr) => word != arr[index-1]).join(" ")