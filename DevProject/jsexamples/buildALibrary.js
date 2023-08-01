// Media is super
// Book, Bovie and CD are child

class Media {
    constructor(title) {
      this._title = title;
      this._isCheckedOut = false;
      this._ratings = [];
    }
  
    get title() {
      return this._title;
    }
  
    get isCheckedOut() {
      return this._isCheckedOut;
    }
  
    get ratings() {
      return this._ratings;
    }
  
    set isCheckedout(checkedOut) {
      this._isCheckedOut = checkedOut;
    }
  
    toggleCheckOutStatus() {
      this.isCheckedOut ? this._isCheckedOut = false : this._isCheckedOut = true;
    }
  
    getAverageRating() {
      let ratingsSum = this.ratings.reduce((currentValue, rating) => currentValue + rating, 0);
      const lengthOfArray = this.ratings.length;
      return ratingsSum / lengthOfArray;
    }
  
    addRating(ratings) {
      this.ratings.push(ratings);
    }
  }
  
  class Book extends Media {
    constructor(author, title, pages) {
      super(title);
      this._author = author;
      this._title = title;
      this._pages = pages;
    }
  
    get author() {
      return this._author;
    }
  
    get pages() {
      return this._pages;
    }
  }
  
  class Movie extends Media {
    constructor(director, title, runTime){
      super(title);
      this._director = director;
      this._runTime = runTime;
    }
  
    get director() {
      return this._director;
    }
  
    get runTime() {
      return this._runTime;
    }
  }
  
  const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);
  
  historyOfEverything.toggleCheckOutStatus();
  
  console.log(historyOfEverything.isCheckedOut);
  
  historyOfEverything.addRating(4, 5, 5);
  
  console.log(historyOfEverything.getAverageRating());
  
  const speed = new Movie('Jan De Bont', 'Speed', 116);
  
  speed.toggleCheckOutStatus();
  
  console.log(speed.isCheckedOut);
  
  speed.addRating(1, 1, 5);
  
  console.log(speed.getAverageRating());