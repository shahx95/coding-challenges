/*
 given parameters:

p0, percent, aug (inhabitants coming or leaving each year), p (population to surpass)

the function nb_year should return n number of entire years needed to get a population greater or equal to p.

aug is an integer, percent a positive or null floating number, p0 and p are positive integers (> 0)

*/


/*
P: parameters R: return value E: examples P: pseudocode

P:  Function takes in 4 numbers as input. aug is an integer, percent a positive or null floating number, p0 and p are positive integers (> 0)
R:  Function returns an integer
E:
        nb_year(1500, 5, 100, 5000) -> 15
        nb_year(1500000, 2.5, 10000, 2000000) -> 10

P:  convert the percent to float
    calculation intitial population total
    setup a loop until population total > p and initialize a counter
    in the loop population total has to be reassigned for every passing year
    once the loop ends, return the counter value


*/

//solution
function nbYear(p0, percent, aug, p) {

    let population_perc = Math.floor(p0 * percent/100)
    
    let population_total = Math.floor(p0 + (population_perc) + aug)
    
    let number_of_years = 1;
    
    while(population_total < p)
    {        
    
            population_perc = Math.floor(population_total * percent/100)
            population_total = Math.floor(population_total + population_perc + aug)
            number_of_years += 1;
        
     }
              
            return number_of_years;
    } 