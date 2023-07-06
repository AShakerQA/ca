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

//for...of loop
const spellingWord = 'hippopotamus';

for (const letter of spellingWord){
  console.log(letter);
}

const pokemonList = ['Pikachu', 'Charizard', 'Squirtle', 'Yoshi', 'Snorlax'];

for (const pokemon of pokemonList){
  if (pokemon === 'Yoshi'){
    continue;
  }
  console.log(`You caught a ${pokemon}!`);
}


//callback function, a function which is used as input to another function (which is the higher-order function)
const addTwo = num => {
  return num + 2;
}

//Example of a higher-order function
const checkConsistentOutput = (func, val) => {
  const checkA = val + 2;
  const checkB = func(val);
  return checkA === checkB ? func(val) : 'inconsistent results';
}
//invoke the callback function without parenthases to call the function, to invoke the function not return its results.
console.log(checkConsistentOutput(addTwo, 4));
