/*
Program channels into your TV's memory. An array with channels (strings) will be passed as an argument to the function redarr(). Sort the channels in an alphabetical order, remove duplicates and, finally, return an object where each channel (object's value) is assigned to a whole number (objects's key), starting with 0.
*/


/*
P: parameters R: return value E: examples P: pseudocode

P:
R:
E:
        var arr = ["BBC1", "BBC2", "MTV"];

        redarr(arr) returns {"0":"BBC1", "1":"BBC2", "2":"MTV"}

        var arr = ["BBC1", "BBC1", "BBC2", "MTV"];

        redarr(arr) returns {"0":"BBC1", "1":"BBC2", "2":"MTV"}
P:
*/


//solution
function redarr(arr) {
    return Object.assign({}, Array.from(new Set(arr)).sort());           
  }

  //alternatively we can use spread operator {...[...new Set(arr)].sort()}


