let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => 
{
    return Math.floor(Math.random() * 10);
};

const compareGuesses = (userGuess, computerGuess, secret) => {
    secret = generateTarget();
    const userValue = Math.abs(secret - userGuess);
    const computerValue = Math.abs(secret - computerGuess);
    console.log('secret: ' + secret);
    console.log('userValue: ' + userValue);
    console.log('computerValue: ' + computerValue);
    if (userValue === computerValue) {
        return true;
    } else if (userValue < computerValue) {
        return true;
    } else {
        return false;
    }
};

console.log(compareGuesses(2, 9));