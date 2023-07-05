const getSleepHours = (day) => {
    switch (day){
      case 'Monday':
        return 8;
        break;
      case 'Tuesday':
        return 5;
        break;
      case 'Wednesday':
        return 6;
        break;
      case 'Thursday':
        return 9;
        break;
      case 'Friday':
        return 2;
        break;
      case 'Saturday':
        return 10;
        break;
      case 'Sunday':
        return 5;
        break;
      default:
        return 'Error';
    }
  };
  
  const getActualSleepHours = () => 
      getSleepHours('Monday') +
      getSleepHours('Tuesday') +
      getSleepHours('Wednesday') +
      getSleepHours('Thursday') +
      getSleepHours('Friday') +
      getSleepHours('Saturday') +
      getSleepHours('Sunday');
  
  const getIdealSleepHours = () => {
    let idealHours = 8;
    return idealHours * 7;
  };
  
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
  
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
  