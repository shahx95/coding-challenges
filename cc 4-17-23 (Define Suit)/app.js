// You get any card as an argument. Your task is to return the suit of this card (in lowercase).

// Our deck (is preloaded):

// ('3♣') -> return 'clubs'
// ('3♦') -> return 'diamonds'
// ('3♥') -> return 'hearts'
// ('3♠') -> return 'spades'

function defineSuit(card) {
    let cardArr = card.split('');
    if(cardArr.includes('♣')){
      return "clubs"
       } else if(cardArr.includes('♦')){
      return "diamonds"
       } else if(cardArr.includes('♥')){
      return "hearts"
       } else if(cardArr.includes('♠')){
      return "spades"
       } 
  }