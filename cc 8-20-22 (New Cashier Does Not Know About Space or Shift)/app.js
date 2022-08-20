/*
Some new cashiers started to work at your restaurant.

They are good at taking orders, but they don't know how to capitalize words, or use a space bar!

All the orders they create look something like this:

"milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza"

The kitchen staff are threatening to quit, because of how difficult it is to read the orders.

Their preference is to get the orders as a nice clean string with spaces and capitals like so:

"Burger Fries Chicken Pizza Pizza Pizza Sandwich Milkshake Milkshake Coke"

The kitchen staff expect the items to be in the same order as they appear in the menu.

The menu items are fairly simple, there is no overlap in the names of the items:

1. Burger
2. Fries
3. Chicken
4. Pizza
5. Sandwich
6. Onionrings
7. Milkshake
8. Coke
*/


/*
P: parameters R: return value E: examples P: pseudocode

P: string
R: string
E:
    "milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza" => "Burger Fries Chicken Pizza Pizza Pizza Sandwich Milkshake Milkshake Coke"
P:  create an empty result array
    create an array having a list of all the items in order like in the menu
    apply forEach method on the array 
        for each food item, check if it exists in the input string
                                        if it exists then replace it with an empty string and push the food item in the result array
        keep checking until the food item is not found in the input string and then move on to the next food item
    after the forEach iteration completes, return the result array                                            
*/

//solution
function getOrder(input) {
    let arr = ["Burger", "Fries", "Chicken", "Pizza", "Sandwich", "Onionrings", "Milkshake", "Coke"]
    let str = input.slice()
    let result = []
    arr.forEach(food => {
      
      while(str.includes(food.toLowerCase())){
        str = str.replace(food.toLowerCase(),"")
        result.push(food)
      }
    })
    return result.join(" ");
  }