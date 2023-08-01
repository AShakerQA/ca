// Example of a class, and its constructor
class Surgeon {
    constructor(name, department) {
      this._name = name; // Underscore indicates these properties should not be accessed directly
      this._department = department;
    }
    get name() {
        return this._name;
    }
    
    get department() {
    return this._department;
    }

    get remainingVacationDays() {
    return this._remainingVacationDays;
    }

    takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
    }
  }

// Example class instance
const surgeonRomero = new Surgeon('Francisco Romero', 'Cardiovascular'); // Create new Surgeon instance
const surgeonJackson = new Surgeon('Ruth Jackson', 'Orthopedics');
console.log(surgeonJackson.name); // Log the name value saved to surgeonJackson
// Output: 'Ruth Jackson'

surgeonRomero.takeVacationDays(15);
console.log(surgeonRomero.remainingVacationDays);
// Output: 5