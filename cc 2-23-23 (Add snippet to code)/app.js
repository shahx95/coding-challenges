//Which snippet could you add to this code to print "food" to the console?

// class Animal {
//     static belly = [];
//     eat() {
//       Animal.belly.push('food');
//     }
//   }
//   let a = new Animal();
//   a.eat();
//   console.log(/* Snippet Here */); //Prints food


  //solution:  
  class Animal {
    static belly = [];
    eat() {
      Animal.belly.push('food');
    }
  }
  let a = new Animal();
  a.eat();
  console.log(Animal.belly[0]); //Prints food