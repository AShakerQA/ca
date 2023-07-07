//func to reverse an array without using in-built functions
const reverseArray = (array) => {
    const reversedArray = [];
    for (let i = array.length - 1; i >= 0; i--) {
      reversedArray.push(array[i]);
    }
    return reversedArray;
  };
  
const sentence = ["sense.", "make", "all", "will", "This"];
  
console.log(reverseArray(sentence));
// Should print ['This', 'will', 'all', 'make', 'sense.'];

//for each array element, print a statement
const greetAliens = (array) => {
    for (let i = 0; i < array.length; i++) {
      console.log(
        `Oh powerful ${array[i]}, we humans offer our unconditional surrender!`
      );
    }
  };
  
  const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];
  
  greetAliens(aliens);

//function to prepend all array items with baby
const convertToBaby = (array) => {
    const babyArray = [];
    for (let i = 0; i < array.length; i++) {
      const babyName = "baby " + array[i];
      babyArray.push(babyName);
    }
    return babyArray;
  };
  
const animals = ["panda", "turtle", "giraffe", "hippo", "sloth", "human"];
  
console.log(convertToBaby(animals));

//calculate the smallest power of two which is greater than or equal to the current element
const numbers = [5, 3, 9, 30];

const smallestPowerOfTwo = arr => {
      let results = [];
      for (let i = 0; i < arr.length; i++) {
            number = arr[i];
            let j = 1;
            while (j < number) {
                  j = j * 2;
            }
            results.push(j);
      }
      return results
}

console.log(smallestPowerOfTwo(numbers)) 


//funcs to accept and decline everything
const veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];

const politelyDecline = (veg) => {
      console.log('No ' + veg + ' please. I will have pizza with extra cheese.');
}

//for each use func above
const declineEverything = array => array.forEach(politelyDecline);

//for each console log I will eat some
const acceptEverything = array => {
  array.forEach((e) => {
    console.log(`Ok, I guess I will eat some ${e}.`)
  })
};

//square numbers
const numList = [2, 7, 9, 171, 52, 33, 14]
const toSquare = num => num * num

// take an array and map array using toSquare
const squareNums = array => array.map(toSquare);

const sq = squareNums(numList);
console.log(sq);

//if you didt have toSquare func you can do
//const squareNums = array => array.map((e) => e * e);


//take an array and return a new array, shouting the greetings
// Write your code here:
const shoutGreetings = (array) => {
    //create temp array, can use map func as well which is simpler
    const tempArray = [];
    for (let i = 0; i < array.length; i++) {
      const upper = `${array[i].toUpperCase()}!`;
      tempArray.push(upper);
    }
    return tempArray;
  };
  
/* Shorter example with array.map() Method, an array Iterator
const shoutGreetings = array => array.map(word => word.toUpperCase() + '!');
*/

const greetings = ["hello", "hi", "heya", "oi", "hey", "yo"];

console.log(shoutGreetings(greetings));
// Should print [ 'HELLO!', 'HI!', 'HEYA!', 'OI!', 'HEY!', 'YO!' ]
  

/* takes in an array and sorts them in decending order

function compareNumbers(a, b) {
  return a - b;
}
numberArray.sort(compareNumbers)
This will reverse the order of the sort
*/
const sortYears = (array) => array.sort((a, b) => b - a);


const years = [1970, 1999, 1951, 1982, 1963, 2011, 2018, 1922];
console.log(sortYears(years));
// Should print [ 2018, 2011, 1999, 1982, 1970, 1963, 1951, 1922 ]


//function that checks if items are present in both arrays
const justCoolStuff = (array1, array2) => 
/*
the second portion returns true, array2.includes(item) if its in array2
which is then returned to array1.filter which creates a new array with 
values that matches true.
*/
array1.filter(item => array2.includes(item))

const coolStuff = ['gameboys', 'skateboards', 'backwards hats', 'fruit-by-the-foot', 'pogs', 'my room', 'temporary tattoos'];

const myStuff = [ 'rules', 'fruit-by-the-foot', 'wedgies', 'sweaters', 'skateboards', 'family-night', 'my room', 'braces', 'the information superhighway']; 

console.log(justCoolStuff(myStuff, coolStuff))
// Should print [ 'fruit-by-the-foot', 'skateboards', 'my room' ]

/*
return boolean based on if each item has a plant based origin
The every() method tests whether all elements in the array pass the 
test implemented by the provided function. It returns a Boolean value.
*/
const isTheDinnerVegan = (array) => array.every((e) => e.source === "plant");

const dinner = [
  { name: "hamburger", source: "meat" },
  { name: "cheese", source: "dairy" },
  { name: "ketchup", source: "plant" },
  { name: "bun", source: "plant" },
  { name: "dessert twinkies", source: "unknown" },
];

console.log(isTheDinnerVegan(dinner));


//sort by array object attribute
const speciesArray = [
    { speciesName: "shark", numTeeth: 50 },
    { speciesName: "dog", numTeeth: 42 },
    { speciesName: "alligator", numTeeth: 80 },
    { speciesName: "human", numTeeth: 32 },
  ];
  //
const sortSpeciesByTeeth = (array) =>
    array.sort((a, b) => a.numTeeth > b.numTeeth);
/*
within the docs for Array.prototype.sort()
when passing a and b, if a > b then a is sorted after b i.e b,a 
and vice versa for a < b, then sorted as a,b
Therefore > sorts ascending and < sorts decending.
*/
console.log(sortSpeciesByTeeth(speciesArray));
// Should print:
// [ { speciesName: 'human', numTeeth: 32 },
//   { speciesName: 'dog', numTeeth: 42 },
//   { speciesName: 'shark', numTeeth: 50 },
//   { speciesName: 'alligator', numTeeth: 80 } ]
  
/*
func takes an array of strings and if keys are in the array returns index, if not returns -1
func findMyKeys takes a array, calls .findIndex() method on said array
for each item in the array, compare item to 'keys'
*/
const findMyKeys = (array) => array.findIndex((item) => item === "keys");

const randomStuff = [
  "credit card",
  "screwdriver",
  "receipt",
  "gum",
  "keys",
  "used gum",
  "plastic spoon",
];

console.log(findMyKeys(randomStuff));
// Should print 4


//take a number and factorize it.
const factorial = (num) => {
    if (num === 0 || num === 1)
      return 1;
    for (let i = num - 1; i >= 1; i--) {
      num *= i;
    }
    return num;
    }

  factorial(6);



// print the space between two letters in an array
// if no 2 matches return 0
// subLength('Saturday', 'a'); // returns 6
// subLength('summer', 'm'); // returns 2
// subLength('digitize', 'i'); // returns 0
// subLength('cheesecake', 'k'); // returns 0

const subLength = (str, char) => {
  //split array into letters s
  let strChars = str.toLowerCase().split(""),
      found = [], //initialise empty array
      length = 0;
  
  //for each value in strChars array, if value matches char
  //push index into empty array (found)
  strChars.forEach((val, index) => { //index is the current index being processed in the array
      if (val === char) {            //parameters for Array.prototype.forEach() in mdn docs
          found.push(index);
      }
  });
// if no 2 occurrences then return length, in this case
//would return 0
  if (found.length != 2) {
      return length;
  }
//slice at index where the match happened
//e.g. str.slice(1,6) is exclusive of 6, therefore length = 5
// +1 = 6, return answer as 6 for 'Saturday', 'a'
 return str.slice(found[0], found[1]).length + 1;
}

console.log(subLength('Saturday', 'a'));