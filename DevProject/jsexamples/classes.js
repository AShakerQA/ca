// Example of a class, and its constructor
//classes in JavaScript follow PascalCase
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
// When creating an instance of a class, you need to use the keyword: new
const surgeonRomero = new Surgeon('Francisco Romero', 'Cardiovascular'); // Create new Surgeon instance
const surgeonJackson = new Surgeon('Ruth Jackson', 'Orthopedics');
console.log(surgeonJackson.name); // Log the name value saved to surgeonJackson
// Output: 'Ruth Jackson'

surgeonRomero.takeVacationDays(15);
console.log(surgeonRomero.remainingVacationDays);
// Output: 5

// Inheritance example
class HospitalEmployee {
    constructor(name) {
      this._name = name;
      this._remainingVacationDays = 20;
    }
    
    get name() {
      return this._name;
    }
    
    get remainingVacationDays() {
      return this._remainingVacationDays;
    }
    
    takeVacationDays(daysOff) {
      this._remainingVacationDays -= daysOff;
    }

    static generatePassword() { //static methods can only be accessed by appending it to the class name, not an instance
        const randomNumber = Math.floor(Math.random()*1000);
        return randomNumber; 
    }
  }
  
  // Notice that Nurse extends HospitalEmployee, therefore it inherits from HospitalEmployee
  class Nurse extends HospitalEmployee{
    constructor(name, certifications){
      super(name); //notice we call the parents constructor method and pass the appropriate value
      //The super keyword is used in subclasses to call a parent constructor
      this._name = name;
      this._certifications = certifications;
    }

    get certifications() {
        return this._certifications;
    }
    
    addCertification(newCertification) {
    this._certifications.push(newCertification);
    }
  }

  // Another example of inheritance
  class Doctor extends HospitalEmployee {
    constructor(name, insurance){
      super(name);
      this._name = name;
      this._insurance = insurance;
    }
  
    get insurance() {
      return this._insurance;
    }
  }
  
const nurseOlynyk = new Nurse('Olynyk', ['Trauma', 'Pediatrics']);

nurseOlynyk.takeVacationDays(5); //Notice you can call functions from the parent class on the child class
console.log(nurseOlynyk.remainingVacationDays);


nurseOlynyk.addCertification('Genetics');// use method from child class
console.log(nurseOlynyk.certifications);

console.log(Nurse.generatePassword()); //Notice static method called on Nurse class and not an instance
// Output: random number between 0-1000

