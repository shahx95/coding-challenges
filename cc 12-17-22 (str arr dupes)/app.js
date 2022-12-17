// You will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

// Example:

// dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].
// dup(["kelless","keenness"]) = ["keles","kenes"].
// Strings will be lowercase only, no spaces 

// dup(["ccooddddddewwwaaaaarrrrsssss","piccaninny","hubbubbubboo"]),['codewars','picaniny','hubububo'])
// dup(["abracadabra","allottee","assessee"]),['abracadabra','alote','asese'])
// dup(["kelless","keenness"]), ['keles','kenes'])

function removeDupes(arr){
    //map -> word - split - filter - join
    return arr.map(
      word => word.split('').filter((l,i,a)=> l != a[i-1] ).join('')
    )
  }
  
  console.log(removeDupes(["ccooddddddewwwaaaaarrrrsssss","piccaninny","hubbubbubboo"]), "['codewars','picaniny','hubububo']")
  console.log(removeDupes(["abracadabra","allottee","assessee"]),"['abracadabra','alote','asese']")
  console.log(removeDupes(["kelless","keenness"]),"['keles','kenes']")