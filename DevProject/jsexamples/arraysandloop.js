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

//Iterators
//The .forEach() Method (does something to each value in the array and return undefined)
const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// Iterating over fruits 
fruits.forEach(fruitItem => console.log(`I want to eat a ${fruitItem}`));

/* The .map() Method (return new array of numbers returned from the function)
When .map() is called on an array, it takes an argument of a callback function
and returns a new array.
*/
const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// takes animal array and extracts the first index of each item in the array and then creates a new array called secretMessage.
const secretMessage = animals.map(animal => 
  animal[0] //notice you do not need a semicolon
);

console.log(secretMessage.join(''));

const bigNumbers = [100, 200, 300, 400, 500];

// Creates a new array which divides each array item from bigNumbers
const smallNumbers = bigNumbers.map(number =>
  Math.floor(number / 100)
);

console.log(smallNumbers);

/* The .filter() Method
Creates a new array. Returns an array of elements after filtering out certain
elements from the original array. The callback function for the .filter() method
should return true or false depending on the element that is passed to it.
The element that causes the callback function to return true are added to the new array
*/
//also creates a new array with array items that evaluate to true from the callback function
const randomNumbers = [375, 200, 3.14, 7, 13, 852];
//if the array item (word) is less than 250, add it to a new array called smallerNumbers
const smallerNumbers = randomNumbers.filter(word => word < 250);
console.log(smallerNumbers);

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];
const longFavoriteWords = favoriteWords.filter(words => words.length > 7);

console.log(longFavoriteWords);

/* The .findIndex() Method
calling .findIndex() on an array will return the index of the first element that 
evaluates to true in the callback function, if it does not find one that satisfies
the condition in the callback, then .findIndex() will return -1
*/
const animalList = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animalList.findIndex(animal => animal === 'elephant' );

//alternative syntax
// const foundAnimal = animalList.findIndex(animal => {
//   return animal === 'elephant';
// });
const startsWithS = animalList.findIndex(animal => animal[0] === 's' ? true : false );
//alternative syntax
// const startsWithS = animalList.findIndex(animal =>{
//   return animal[0] === 's' ? true : false; 
//   });


/* The .reduce() Method (accepts an array containing multiple values and returns a signle value)
Returns a single value after iterating through the elements of an array.
Thereby reducing the array.
*/
const newNumbers = [1, 3, 5, 7];

//accumulator = 10, currentValue = 1, total = 11
//accumulator = 11, currentValue = 3 (newNumbers.[1]), total = 14
//accumulator = 14, currentValue = 5, total = 19
//accumulator = 19, currentValue = 7 (last item in array), total = 26
const newSum = newNumbers.reduce((accumulator, currentValue) => {
  console.log('The value of accumulator: ', accumulator);
  console.log('The value of currentValue: ', currentValue);
  return accumulator + currentValue;
}, 10); //10 is the initial value


console.log(newSum);
/*
Output:
The value of accumulator:  10
The value of currentValue:  1
The value of accumulator:  11
The value of currentValue:  3
The value of accumulator:  14
The value of currentValue:  5
The value of accumulator:  19
The value of currentValue:  7
26
*/

//read more about iterators: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Iteration_methods

/* The .some() Method (returns boolean value)
Tests whether at least one element in the array passes the test implemented by the provided function. returns true
if the array finds an element, otherwirse false. Does not modify the array.
*/
const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

console.log(words.some((word) =>  word.length < 6 ));
//alternatively written like this
// console.log(words.some((word) => {
//   return word.length < 6;
// }));

//END OF ITERATORS