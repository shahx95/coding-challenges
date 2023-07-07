/*
Two red beads are placed between every two blue beads. There are N blue beads. After looking at the arrangement below work out the number of red beads.

B RR B RR B RR B RR B RR B
Implement count_red_beads(n) (in PHP count_red_beads($n); in Java, Javascript, TypeScript, C, C++ countRedBeads(n)) so that it returns the number of red beads.
If there are less than 2 blue beads return 0.
*/

/*
Example: 
        countRedBeads(0) => 0
        countRedBeads(1) => 0
        countRedBeads(3) => 4
        countRedBeads(5) => 8
P:
    
    check if n < 2 and return 0
    else
        except for the last blue, every blue accompanies two red
        so subtract 1 blue from the total blue and multiply with 2 to get red
*/

//solution
function countRedBeads(n) {
    if(n<2) { return 0 }
    else{
      return (n-1)*2
    }
  }