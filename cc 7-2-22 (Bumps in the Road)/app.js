/*
Your car is old, it breaks easily. The shock absorbers are gone and you think it can handle about 15 more bumps before it dies totally.

Unfortunately for you, your drive is very bumpy! Given a string showing either flat road ("_") or bumps ("n"), work out if you make it home safely. 15 bumps or under, return "Woohoo!", over 15 bumps return "Car Dead".
*/

/*
P: parameters R: return value E: examples P: pseudocode

P:  string
R:  string. either "Woohoo!" or "Car Dead"
E:  
    bump("__________n____") => "Woohoo!"
    bump("____n_n____n_n__n_n_n_n________________n__n_n______n_n_n_______n") => "Car Dead"
P:
    we only care about the number of bumps
    split the string by n. the array formed will have as many elements as there are n in the input string
    get the length of the split array
    check if it is greater than 15 and return "car dead"
    otherwise return "woohoo!"
*/

//solution
function bump(str){
    bumpCounter = str.split("n").length
    return bumpCounter> 15? "Car Dead":"Woohoo!"
}