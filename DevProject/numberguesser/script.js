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
    // console.log('secret: ' + secret);
    // console.log('userValue: ' + userValue);
    // console.log('computerValue: ' + computerValue);
    if (userValue === computerValue) {
        return true;
    } else if (userValue < computerValue) {
        return true;
    } else {
        return false;
    }
};

// console.log(compareGuesses(2, 9));

const updateScore = winner => {
    switch (winner){
        case 'human':
            humanScore++;
            break;
        case 'computer':
            computerScore++;
            break;
        default:
            break;
    }
};

// console.log(updateScore('computer'));
// console.log(humanScore);
// console.log(computerScore);

const advanceRound = () => currentRoundNumber++;