//create a new object called menu
const menu = {
    _meal: '', //private values
    _price: 0,
    set meal(mealToCheck) {
      if(typeof mealToCheck === 'string') { //validate user input is a string
        this._meal = mealToCheck; //set private value to user input
      } else {
        return 'menu unavailable';
      }
    },
    set price(priceToCheck) {
      if(typeof priceToCheck === 'number') {
        this._price = priceToCheck;
      } else {
        return 'menu unavailable';
      }
    },
    get meal() {
      if(this._meal) { //if truthy value, in this case if _meal is not an empty string
        return `Todays special is: ${this._meal}.`;
      } else {
        return 'Meal or price was not set correctly!';
      }
    },
    get price() {
      if(this._price) { //if truthy value, in this case if _price is not 0
        return `Todays special price is: £${this._price}.`
      } else {
        return 'Meal or price was not set correctly!';
      }
    }
  }
  
menu.meal = 'spagetti'; //using setter, does not require parentheses 
menu.price = 5;

console.log(menu.meal); //using getter, does not require parentheses
console.log(menu.price);
  