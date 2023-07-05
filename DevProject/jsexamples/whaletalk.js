//random word
const input = 'turpentine and turtles';

const vowels = ['a', 'e', 'i', 'o', 'u'];
//initialise empty array
const resultArray = [];

for (let inputIndex = 0; inputIndex < input.length; inputIndex++){
    if(input[inputIndex] === 'e'){
        resultArray.push(input[inputIndex]);
    }
    if(input[inputIndex] === 'u'){
        resultArray.push(input[inputIndex]);
    }
    //if letters from input match vowels array, add to empty array
    for (let vowelIndex = 0; vowelIndex < vowels.length; vowelIndex++){
        if(input[inputIndex] === vowels[vowelIndex]){
            // console.log(input[inputIndex]);
            //push adds to the end
            resultArray.push(input[inputIndex]);
        }
    }
}

// console.log(resultArray);
//join array to combine into a string
const resultString = resultArray.join('').toUpperCase();
console.log(resultString);