/*
Sum of Pairs
Given a list of integers and a single sum value, return the first two values (parse from the left please) in order of appearance that add up to form the sum.

If there are two or more pairs with the required sum, the pair whose second element has the smallest index is the solution.

Negative numbers and duplicate numbers can and will appear.

NOTE: There will also be lists tested of lengths upwards of 10,000,000 elements. Be sure your code doesn't time out.
*/
 
/*
function arguments: arr of integers and integer. can be positive or negative numbers. can be duplicates. no floats. 
*/

/*
examples:

sum_pairs([11, 3, 7, 5],         10)
#              ^--^      3 + 7 = 10
== [3, 7]

sum_pairs([4, 3, 2, 3, 4],         6)
#          ^-----^         4 + 2 = 6, indices: 0, 2 *
#             ^-----^      3 + 3 = 6, indices: 1, 3
#                ^-----^   2 + 4 = 6, indices: 2, 4
#  * the correct answer is the pair whose second value has the smallest index
== [4, 2]

sum_pairs([0, 0, -2, 3], 2)
#  there are no pairs of values that can be added to produce 2.
== None/nil/undefined (Based on the language)

sum_pairs([10, 5, 2, 3, 7, 5],         10)
#              ^-----------^   5 + 5 = 10, indices: 1, 5
#                    ^--^      3 + 7 = 10, indices: 3, 4 *
#  * the correct answer is the pair whose second value has the smallest index
== [3, 7]
*/ 

/*
create an object to store integers seen
create a loop to iterate over the array of integers
    if the difference between sum and current element is in our seen object, then we have the result to return
    else move to the next number after adding the element to the object 
*/


/* solution */

const sum_pairs = function(ints, s){
    var seen = {}
    for (let i = 0; i < ints.length; ++i) {
      if (seen[s - ints[i]]) return [s - ints[i], ints[i]];
      seen[ints[i]] = true
    }
  }