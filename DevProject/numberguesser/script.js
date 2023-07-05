let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const advanceRound = () => currentRoundNumber++;
// Write your code below:
const generateTarget = () => 
{
    return Math.floor(Math.random() * 10);
};

const getAbsoluteDistance = (secret, guess) => Math.abs(secret - guess);

const compareGuesses = (userGuess, computerGuess, secret) => {
    secret = generateTarget();
    const userValue = getAbsoluteDistance(secret, userGuess);
    const computerValue = getAbsoluteDistance(secret, computerGuess);
    // console.log('secret: ' + secret);
    // console.log('userValue: ' + userValue);
    // console.log('computerValue: ' + computerValue);
    return userValue <= computerValue;
};

// console.log(compareGuesses(2, 9));

const updateScore = winner => {
    if (winner === 'human') {
      humanScore++;
    } else if (winner === 'computer') {
      computerScore++;
    }
  }

// console.log(updateScore('computer'));
// console.log(humanScore);
// console.log(computerScore);