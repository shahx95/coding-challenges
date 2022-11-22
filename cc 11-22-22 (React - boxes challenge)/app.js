import React from "react"
import boxes from "./boxes"

export default function App() {
    /**
     * Challenge part 1:
     * 1. Initialize state with the default value of the
     *    array pulled in from boxes.js
     * 2. Map over that state array and display each one
     *    as an empty square (black border, transparent bg color)
     *    (Don't worry about using the "on" property yet)
     */
    
     //solution:
    let [boxesArr, setBoxesArr] = React.useState(boxes)
    
    let boxesArrMapped = boxesArr.map(box => <div key={box.id} className="box--div">{box.id}</div>)
    return (
        <main>
            <h1>Boxes will go here</h1>
            {boxesArrMapped}
        </main>
    )
}

//in style.css 
// * {
//     box-sizing: border-box;
// }

// .box--div{
//     height: 50px;
//     width: 50px;
//     border: solid 3px black;
//     text-align: center;
//     display: inline-block;
// }