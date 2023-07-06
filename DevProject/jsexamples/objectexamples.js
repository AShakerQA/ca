//Example syntax to create an object literal
let fasterShip = {
    'Fuel Type': 'Turbo Fuel',
    color: 'silver'
  }

  //accessing properties of objects
  let spaceship = {
    homePlanet: 'Earth',
    color: 'silver',
    'Fuel Type': 'Turbo Fuel',
    numCrew: 5,
    flightPath: ['Venus', 'Mars', 'Saturn']
  };
  
  let crewCount = spaceship.numCrew;
  let planetArray = spaceship.flightPath;

  /*
  bracket notation is used for keys that have
  numbers, spaces or special characters in them
  */
  let rocketShip = {
    'Fuel Type' : 'Turbo Fuel',
    'Active Mission' : true,
    homePlanet : 'Earth', 
    numCrew: 5
   };
  
  let propName =  'Active Mission';
  
  let isActive = rocketShip['Active Mission'];
  
  console.log(rocketShip[propName]);
  
  //add, mutate and delete object properties 
  let silverSpaceship = {
    'Fuel Type' : 'Turbo Fuel',
    homePlanet : 'Earth',
    color: 'silver',
    'Secret Mission' : 'Discover life outside of Earth.'
  };
  
  // Write your code below
  silverSpaceship.color = 'glorious gold';
  silverSpaceshipspaceship.numEngines = 9;
  delete silverSpaceship['Secret Mission'];
  
  console.log(silverSpaceship['Secret Mission']);

  //Object Method declaration and invoking
  let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

// Write your code below
const alienShip = {
  retreat () {
    console.log(retreatMessage);
  },
  takeOff () {
    console.log('Spim... Borp... Glix... Blastoff!');
  }
}

alienShip.retreat();
alienShip.takeOff();

//nested objects
let bigSpaceship = {
    passengers: [
      {
        name: 'K9'
      }
    ]
    ,
    telescope: {
      yearBuilt: 2018,
      model: "91031-XLT",
      focalLength: 2032 
    },
    crew: {
      captain: { 
        name: 'Sandra', 
        degree: 'Computer Engineering', 
        encourageTeam() { console.log('We got this!') },
       'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
    },
    engine: {
      model: "Nimbus2000"
    },
    nanoelectronics: {
      computer: {
        terabytes: 100,
        monitors: "HD"
      },
      'back-up': {
        battery: "Lithium",
        terabytes: 50
      }
    }
  }; 
  
  
  let capFave = bigSpaceship.crew.captain['favorite foods'][0];
  
  let firstPassenger = bigSpaceship.passengers[0];
  
  console.log(firstPassenger);

  //Pass by reference
  let smallSpaceship = {
    'Fuel Type' : 'Turbo Fuel',
    homePlanet : 'Earth'
  };
  
  const greenEnergy = obj => {
    obj['Fuel Type'] = 'avocado oil';
  };
  
  const remotelyDisable = obj => {
    obj.disabled = true;
  };
  
  greenEnergy(smallSpaceship);
  remotelyDisable(smallSpaceship);
  
  console.log(smallSpaceship);


//for...in, looping through objects
  let loopShip = {
    crew: {
    captain: { 
        name: 'Lily', 
        degree: 'Computer Engineering', 
        cheerTeam() { console.log('You got this!') } 
        },
    'chief officer': { 
        name: 'Dan', 
        degree: 'Aerospace Engineering', 
        agree() { console.log('I agree, captain!') } 
        },
    medic: { 
        name: 'Clementine', 
        degree: 'Physics', 
        announce() { console.log(`Jets on!`) } },
    translator: {
        name: 'Shauna', 
        degree: 'Conservation Science', 
        powerFuel() { console.log('The tank is full!') } 
        }
    }
}; 

//for...in
/*HINT
for (let variableName in outerObject.innerObject) {
    console.log(`${variableName}: ${outerObject.innerObject[variableName].propertyName}`)
  };
*/
for (let crewMember in loopShip.crew){
  console.log(`${crewMember}: ${loopShip.crew[crewMember].name}`)
};
//captain: Lily
// chief officer: Dan
// medic: Clementine
// translator: Shauna

for (let crewMember in loopShip.crew){
  console.log(`${loopShip.crew[crewMember].name}: ${loopShip.crew[crewMember].degree}`)
};
//Lily: Computer Engineering
// Dan: Aerospace Engineering
// Clementine: Physics
// Shauna: Conservation Science

//Using the this command, cannot use arrow function declarations for this. methods
const robot = {
  model: '1E78V2',
  energyLevel: 100,
  provideInfo() {
    return `I am ${this.model} and my current energy level is ${this.energyLevel}.`;
  }
};

console.log(robot.provideInfo());

//getter example
const secondRobot = {
  //the underscore tells developers that this attribute is private (however you can still mutate it)
  _model: '1E78V2',
  _energyLevel: 100,
  get energyLevel () {
    if(typeof this._energyLevel === 'number') {
      return `My current energy level is ${this._energyLevel}.`;
    } else {
      return 'System malfunction: cannot retrieve energy level';
    }
  }
};

//when calling a getter, no need to include the parentheses, its like calling a property
console.log(secondRobot.energyLevel);


//setters
const thirdRobot = {
  _model: '1E78V2',
  _energyLevel: 100,
  _numOfSensors: 15,
  get numOfSensors(){
    if(typeof this._numOfSensors === 'number'){
      return this._numOfSensors;
    } else {
      return 'Sensors are currently down.'
    }
  },
  //check input value is a number, else throw error
  set numOfSensors(num){
    if(typeof num === 'number' && num >= 0) {
      this._numOfSensors = num;
    } else {
      console.log('Pass in a number that is greater than or equal to 0');
    }
  }
};
//set the new value using setter, notice no need to use paretheses. (similar to getters)
thirdRobot.numOfSensors = 100;

console.log(thirdRobot.numOfSensors);


//factory functions
const robotFactory = (model, mobile) => {
  return { //notice the return keyword
    model: model,
    mobile: mobile,
    beep() {
      console.log('Beep Boop');
    }
  }
};

//creates a tinCan robot from the factory function
const tinCan = robotFactory('P-500', true);

tinCan.beep();

console.log(tinCan.model);


//Property Value Shorthand introduced in ES6 
const fastRobotFactory = (model, mobile) => {
  return {
    model,
    mobile,
    beep() {
      console.log('Beep Boop');
    }
  }
}

// To check that the property value shorthand technique worked:
const newRobot = fastRobotFactory('P-501', false)
console.log(newRobot.model)
console.log(newRobot.mobile)