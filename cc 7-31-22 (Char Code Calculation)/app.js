/*
Given a string, turn each character into its ASCII character code and join them together to create a number - let's call this number total1:
'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667
Then replace any incidence of the number 7 with the number 1, and call this number 'total2':
total1 = 656667
              ^
total2 = 656661
              ^
Then return the difference between the sum of the digits in total1 and total2:
    (6 + 5 + 6 + 6 + 6 + 7)
-   (6 + 5 + 6 + 6 + 6 + 1)
    -------------------------
                         6
*/
/*
P: parameters R: return value E: examples P: pseudocode

P: string of alphabets. alphabets can be upper case or lowercase.
R: integer
E:
    calc('ABC') => 6
P:
    first create a variable total1
        convert the input string to an array 
        use map on the array and create an array of unicode for respective elements
        join the map output
    now create total2
        convert total1 to array and use map to replace 7 with 1
        join the output by map into a string
    use reduce on total1 and total2 and return the difference 
*/
//solution

function calc(x){
    let total1 = ([...x].map(character => character.charCodeAt()).join(""))
    // console.log(total1)
    let total2 = [...total1].map(digit => digit === "7"? "1":digit).join("")
    // console.log(total2)

    return  [...total1].reduce((total,currentVal) => total+ +currentVal, 0) 
            - 
            [...total2].reduce((total,currentVal) => total+ +currentVal, 0)
    
  }