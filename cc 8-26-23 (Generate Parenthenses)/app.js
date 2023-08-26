// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses. Constraint: 1 <= n <= 8

 
//examples
// Example 1:
// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]

// Example 2:
// Input: n = 1
// Output: ["()"]

//solution
function generateParentheses(n) {
    const result = [];

    function backtrack(s, left, right) {
        if (s.length === 2 * n) {
            result.push(s);
            return;
        }

        if (left < n) {
            backtrack(s + '(', left + 1, right);
        }
        if (right < left) {
            backtrack(s + ')', left, right + 1);
        }
    }

    backtrack('', 0, 0);
    return result;
}

const n1 = 3;
console.log("Input: n =", n1);
console.log("Output:", generateParentheses(n1));

const n2 = 1;
console.log("Input: n =", n2);
console.log("Output:", generateParentheses(n2));