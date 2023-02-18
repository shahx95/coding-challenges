/*
Write a function called groupBy that takes an array of objects and a property name as input, and returns an object that groups the objects in the array by the values of the specified property.
*/

/*example
        [
            { name: "Alice", age: 25, gender: "female" },
            { name: "Bob", age: 30, gender: "male" },
            { name: "Charlie", age: 35, gender: "male" },
            { name: "Dave", age: 25, gender: "male" },
            { name: "Eve", age: 30, gender: "female" }
        ]
returns
        {
        25: [
            { name: "Alice", age: 25, gender: "female" },
            { name: "Dave", age: 25, gender: "male" }
        ],
        30: [
            { name: "Bob", age: 30, gender: "male" },
            { name: "Eve", age: 30, gender: "female" }
        ],
        35: [
            { name: "Charlie", age: 35, gender: "male" }
        ]
        }

*/  

//will property always be valid?

// time and space complexity: O(n)

//solution
function groupBy(array, property) {
    
    return array.reduce((total,current)=>{
        total[current[property]] = total[current[property]] ? [...total[current[property]],current] : [current]
        return total
    },{})
  }