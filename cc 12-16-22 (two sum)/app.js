// Given an array of numbers, return all pairs that add up to a given sum. The numbers can be used more than once.

// describe("Two Sum", () => {
//  it("Should implement two sum", () => {
//   assert.deepEqual(twoSum([1, 2, 2, 3, 4], 4), [[2, 2], [3, 1]]);
//  });
// });


//what about repeated pairs? will the numbers be always positive? will there be numbers in the array greater than the value of sum?

//can solve via brute force by using nested for loops. time complexity will be quadratic

//more optimal way is to use hash

function twoSum(arr,sum){
    const pairs = []
    const nums = {}
  
    for(const num1 of arr){
      const num2 = sum - num1
      if(nums[num2]){
        pairs.push([num1,num2])
      }else{
        nums[num1] = 1
      }
    }
    return pairs
  }


  console.log(twoSum([1, 2, 2, 3, 4],4),'[[2, 2], [3, 1]]')