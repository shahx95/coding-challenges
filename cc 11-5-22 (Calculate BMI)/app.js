/*
Description:
Write function bmi that calculates body mass index (bmi = weight / height ^ 2).
if bmi <= 18.5 return "Underweight"
if bmi <= 25.0 return "Normal"
if bmi <= 30.0 return "Overweight"
if bmi > 30 return "Obese"
*/

/*
P: parameters R: return value E: examples P: pseudocode

P: input will always be a number
R: string
E: 
bmi(50, 1.80) => "Underweight"
bmi(80, 1.80) => "Normal"
bmi(90, 1.80) => "Overweight"
P:
    use ternary and return appropiate statement
*/

//solution
const bmi = (w, h, bmi = w/h/h) =>  bmi <= 18.5 ? "Underweight" :
                                    bmi <= 25 ? "Normal" :
                                    bmi <= 30 ? "Overweight" : "Obese";