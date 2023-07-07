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