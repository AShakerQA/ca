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
  