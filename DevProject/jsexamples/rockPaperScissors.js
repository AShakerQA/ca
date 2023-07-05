console.log('Hi');

// Edge case, convert userinput into lowercase
const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'){
    return userInput;
  } else {
    console.log('Please choose a valid option.');
  }
};

//auto generate computer choice via Math.random
const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber){
      case 0:
        return 'rock';
      case 1: 
        return 'paper';
      case 2:
        return 'scissors';
    }
  };

  //function to compare outcome of game
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      return 'The game is a tie!';
    } 
    if (userChoice === 'rock'){
      if (computerChoice ==='paper'){
        return 'The computer won!';
      } else {
        return 'You won!';
      }
    }
     if (userChoice === 'paper'){
      if (computerChoice ==='scissors'){
        return 'The computer won!';
      } else {
        return 'You won!';
      }
    }
    if (userChoice === 'scissors'){
      if (computerChoice ==='rock'){
        return 'The computer won!';
      } else {
        return 'You won!';
      }
    }
  };

  //interactive to user using string interpolation
  const playGame = () => {
    const userChoice = getUserChoice('PapER'); //input can be changed.
    console.log(`You threw ${userChoice}`);
    let computerChoice = getComputerChoice();
    console.log(`Computer selected ${computerChoice}`);
  
    console.log(determineWinner(userChoice, computerChoice));
  };
  
  playGame();