const vacationSpots = ['Bali', 'Paris', 'Tulum'];

// Write your code below
for (let i = 0; i < vacationSpots.length; i++){
  console.log(`I would love to visit ${vacationSpots[i]}`);
}

//gap
const cards = ['diamond', 'spade', 'heart', 'club'];

let currentCard;

while (currentCard !== 'spade'){
  currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard);
}

//gap
let bobsFollowers = ['a', 'b', 'c', 'd'];
let tinasFollowers = ['a', 'c', 'e'];
let mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++){
  for (let j = 0; j < tinasFollowers.length; j++){
    if (bobsFollowers[i] === tinasFollowers[j]){
      mutualFollowers.push(bobsFollowers[i]);
    } 
  }
}

console.log(mutualFollowers);