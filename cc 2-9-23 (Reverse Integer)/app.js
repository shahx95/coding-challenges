//Write a function that takes an integer x as input and returns the reverse of the integer. The function should return 0 when the reversed integer overflows.


//Input: an integer x (-2^31 <= x <= 2^31 - 1)
//Output: an integer

// Input: 123 => Output: 321
// Input: -123 => Output: -321
// Input: 120 => Output: 21

//solution
function reverse(x) {
    let sign = 1;
  //manage negative integer
    if (x < 0) {
        sign = -1;
        x = -x;
    }

    let reversed = 0;
  
    while (x > 0) {
        reversed = reversed * 10 + x % 10;
        x = Math.floor(x / 10);
    }
//prevent overflow
    if (reversed > (Math.pow(2, 31) - 1)) {
        return 0;
    }

    return sign * reversed;
}

