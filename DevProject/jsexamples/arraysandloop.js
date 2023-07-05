//for loop
const vacationSpots = ['Bali', 'Paris', 'Tulum'];

for (let i = 0; i < vacationSpots.length; i++){
  console.log(`I would love to visit ${vacationSpots[i]}`);
}

//while loop
const cards = ['diamond', 'spade', 'heart', 'club'];

let currentCard;

while (currentCard !== 'spade'){
  currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard);
}

//nested loops
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

//do while
let cupsOfSugarNeeded = 9;
let cupsAdded = 0;

do {
  cupsAdded ++;
  console.log(`${cupsAdded} cup was added`);
} while (cupsAdded < cupsOfSugarNeeded);

//gap
const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

// break keyword
for (let i = 0; i < rapperArray.length; i++){
  console.log(rapperArray[i]);
  if (rapperArray[i] === 'Notorious B.I.G.'){
    break;
  }
}

console.log("And if you don't know, now you know");