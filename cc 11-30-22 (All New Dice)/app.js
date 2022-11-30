import React from "react"
import Die from "./Die"

/**
 * Challenge:
 * 
 * Write a function (allNewDice) that returns an array 
 * of 10 random numbers between 1-6 inclusive.
 * 
 * Optional:
 * Use the function's result to generate 10 Dice components having a random value
 */

export default function App() {
    const random = () => Math.ceil(Math.random()*6)
    let arr = [];
    function allNewDice(){
        let i=0;
        
        while(i<10){
            arr.push(random())
            i++
        }
        return arr
    }
    allNewDice()
    console.log(arr)
    
    let diceArr = arr.map(element => <Die value={element} />) 
    console.log(diceArr)
    return (
        <main>
            <div className="dice-container">
                {diceArr}
            </div>
        </main>
    )
}