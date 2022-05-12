/*
Ahoy matey!

You are a leader of a small pirate crew. And you have a plan. With the help of OOP you wish to make a pretty efficient system to identify ships with a heavy booty on board.

Unfortunattely for you, people weigh a lot this days, so how do you know if a ship if full of gold and not people?

Every time your spies see a new ship enter the dock, they will create a new ship object based on their observations:
draft - an estimate of the ship's weight based on how low it is in the water
crew - the count of crew on board

var titanic = new Ship(15, 10);

Taking into account that an average crew member on board adds 1.5 units to the draft, a ship that has a draft of more than 20 without crew is considered worthy to loot. Any ship weighing that much must have a lot of booty!

Add the method isWorthIt to decide if the ship is worthy to loot. For example:
titanic.isWorthIt() // return false

*/

/*
P: parameters R: return value E: examples P: pseudocode

P: We will be accepting integers as input for draft and crew
R: return a boolean value 
E: 
    titanic = new Ship(0,0) //returns false on isWorthIt method
    carnival = new Ship(100,150) //returns false on isWorthIt method
    queen = new Ship(1000,250) //returns true on isWorthIt method 
P: 
    create a class called Ship with draft and crew as parameters for its constructor method
    setup getters for draft and crew
    create a method isWorthIt to return true/false after calculating
    create a new object using the Ship class and test 
*/

class Ship{
    constructor(draft, crew){
      this._draft = draft
      this._crew = crew
    }
    get draft(){
      return this._draft
    }
    get crew(){
      return this._crew
    }
    isWorthIt(){
      if( (this._draft-(this._crew*1.5)) > 20){
        return true
      }
      else return false
    }
  }

let titanic = new Ship(0,0) //returns false  