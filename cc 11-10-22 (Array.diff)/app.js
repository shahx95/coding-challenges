/*
Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.
If a value is present in b, all of its occurrences must be removed from the other:
*/
/*
P: parameters R: return value E: examples P: pseudocode

P:  array of integers.
R:  array of integers.
E:
    arrayDiff([1,2],[1]) == [2]
    arrayDiff([1,2,2,2,3],[2]) == [1,3]
P:
    use filter !includes 
*/

//solution
function array_diff(a, b) {
    return a.filter(e => !b.includes(e));
  }