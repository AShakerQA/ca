//change your values here for the week, monday, tues, ...
const getActualSleepHours = () => 
      8 + 5 + 6 + 9 + 2 + 10 + 5;
  
//implicit return
const getIdealSleepHours = idealHours => idealHours * 7;
  
const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours(8);

    if (actualSleepHours === idealSleepHours) {
        console.log('You have achieved the perfect amount of sleep for the week.');
    } else if (actualSleepHours > idealSleepHours) {
        console.log('You have sleep more than needed.');
    } else if (actualSleepHours < idealSleepHours){
    console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than you needed this week. Get some rest.');
    } else {
        console.log('Code error.');
    }
};
  
calculateSleepDebt();
