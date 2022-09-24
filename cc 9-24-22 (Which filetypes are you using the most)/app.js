/*
You've been working with a lot of different file types recently as your interests have broadened.

But what file types are you using the most? With this question in mind we look at the following problem.

Given a List/Array of Filenames (strings) files return a List/Array of string(s) containing the most common extension(s). If there is a tie, return a sorted list of all extensions.

Important Info:
Don't forget, you've been working with a lot of different file types, so expect some interesting extensions/file names/lengths in the random tests.
Filenames and extensions will only contain letters (case sensitive), and numbers.
If a file has multiple extensions (ie: mysong.mp3.als) only count the last extension (.als in this case)
*/

/*
P: parameters R: return value E: examples P: pseudocode

P: array
R: array
E:
        files = ['Lakey - Better days.mp3', 
                'Wheathan - Superlove.wav', 
                'groovy jam.als', 
                '#4 final mixdown.als', 
                'album cover.ps', 
                'good nights.mp3']
        would return: ['.als', '.mp3'], as both of the extensions appear two times in files.        
P:
    collect all the input array elements which have a file type and store the count for each filetype in an object
    check for the filetype with the max count
    filter the filetype by the max count
    sort the filtered array and return

*/

//solution
function solve(files) {
  
    let collection = files.reduce((total,file) => {
      if(file.includes(".")){
        let extension =  file.slice(file.lastIndexOf("."))
        total[extension] = (total[extension] || 0) + 1
      }
      return total
    }, {})
    
    let max = Math.max(...Object.values(collection))
    return [...Object.keys(collection)].filter(key => collection[key] === max).sort()
}    