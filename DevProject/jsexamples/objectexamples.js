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