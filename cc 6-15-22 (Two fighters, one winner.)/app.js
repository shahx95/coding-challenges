/*
Create a function that returns the name of the winner in a fight between two fighters.

Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death is defined as having health <= 0.

Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.

Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0. You can mutate the Fighter objects.

Fighter class:
function Fighter(name, health, damagePerAttack) {
        this.name = name;
        this.health = health;
        this.damagePerAttack = damagePerAttack;
        this.toString = function() { return this.name; }
}
*/


/*
P: parameters R: return value E: examples P: pseudocode

P:  function accepts a string for name parameter and integers for health and damagePerAttack parameters
R:  function returns a string
E:  
     declare_winner(Fighter("Lew", 10, 2), Fighter("Harry", 5, 4), "Lew") => "Lew"
P:  
    setup a turn with the first attackers name
    while health of both fighters > 0:
        fight and reverse the turn
    check the fighter with <0 health
        return the other fighter    


*/

//solution
function declareWinner(fighter1, fighter2, firstAttacker) {
    let turn = firstAttacker
    while(fighter1.health>0 && fighter2.health>0){
      if(turn===fighter1.name){
        fighter2.health = fighter2.health-fighter1.damagePerAttack
        turn=fighter2.name
      }
      else{
        fighter1.health = fighter1.health-fighter2.damagePerAttack
        turn=fighter1.name
      }
    }
    if(fighter1.health<=0){
      return fighter2.name
    }
    else return fighter1.name
    
  }