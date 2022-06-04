/*
Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

(In this case, all triangles must have surface greater than 0 to be accepted).
*/

/*
P: parameter R: return E: examples P: pseudocode

P:  function takes three integer values. all integer values must be > 0.
R:  returns a boolean value
E:  
        isTriangle(1,2,2) => true
        isTriangle(7,2,2) => false
P: 
    use the triangle inequality theorem
    if the integer values dont pass the theorem, return false
    else return true
*/

//solution
function isTriangle(a,b,c)
{
  
  if(a>0 && b>0 && c>0){
    //any side of a triangle is always smaller than the sum of the other two sides
    if( a+b<=c || a+c<=b || b+c<=a ){
        return false;
         }
       return true
  }
}


