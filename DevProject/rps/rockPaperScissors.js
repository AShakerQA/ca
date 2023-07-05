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