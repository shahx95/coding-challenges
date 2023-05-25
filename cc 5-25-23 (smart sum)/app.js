//Your task is to write a function, smartSum, that returns the sum of an arbitrary number of arguments. But be careful, some of your arguments can be arrays of numbers or nested arrays.

console.log(smartSum(1, 2, 3, [4, 5], 6)); // 21
console.log(smartSum(1, 2, [[3, 4], 5], 6)); // 21

//solution - can be done in a one liner but for better readablity its good to break into multiple lines

function smartSum(...args) {
    let sum = 0;
    //function to flatten array
    const flattenArray = (arr) => {
      // iterate through the array and check if the current value is an array or not. 
      // if it is an array, call the flattenArray function recursively 
      // else sum and store in accumulator
      return arr.reduce((acc, val) => {
        return acc.concat(Array.isArray(val) ? flattenArray(val) : val);
      }, []);
    };

    //loop and sum 
    args = flattenArray(args);
    for (let i = 0; i < args.length; i++) {
      sum += args[i];
    }
    return sum;
  }