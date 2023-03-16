//what will the following code output and why?

console.log(
    "100" == 100 === !false == "1"
)

//solution
/*
The code will output true
The expression will be evaluated from left to right

First, "100" == 100 will be evaluated. The == operator checks for equality after converting the operands to a common type. In this case, the string "100" will be converted to a number, resulting in 100. So, the expression becomes 100 == 100, which is true.

Next, true === !false will be evaluated. The ! operator negates the value of false, resulting in true. So, the expression becomes true === true, which is also true.

Finally, "1" will be compared to the boolean value true. JavaScript will coerce the string "1" to a boolean value, which will also be true. So, the expression becomes true == true, which is true.

Therefore, the overall expression evaluates to true.
*/