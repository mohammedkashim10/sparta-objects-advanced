// OBJECT LITERAL

// const book1 = {
//   title: 'The Way of Kings',
//   author: 'Brandon Sanderson',
//   year: 2002,
//   getSummary: function() {
//     return `${this.title} was written by ${this.author} in ${this.year}`
//   }
// }
//
// console.log(book1);
// console.log(book1.getSummary());


// OBJECT CONSTRUCTOR

// function book(title, author, year) {
//   this.title = title; //'this' here refers to 'book'
//   this.author = author;
//   this.year = year;
//   this.getSummary = function() {
//     return `${this.title} was written by ${this.author} in ${this.year}`
//   }
// }
//
// const book1 = new book('Winds of Winter', 'George RR Martin', 2055);
// const book2 = new book('Doors of Stone', 'patrick Rothfuss', 2022);
//
// console.log(book1);
// console.log(Object.values(book2));
// console.log(book1.getSummary());
// console.log(book2.getSummary());


// PROTOTYPES

// function book(title, author, year) {
//   this.title = title;
//   this.author = author;
//   this.year = year;
// }
//
// function author(name, nationality, dob) {
//   this.name = name;
//   this.nationality = nationality;
//   this.dob = dob;
// }

// Adding prototype to Object
// book.prototype.getSummary = function() {
//   return `${this.title} was written by ${this.author} in ${this.year}`
// }
//
// Object.prototype.logSomething = function() {
//   console.log('Something');
//   return 'Something';
// }
//
// Array.prototype.description = function() {
//   console.log('This is an array');
//   return 'This is an array';
// }
//
// const array1 = [1, 2, 3, 4, 5];
// const array2 = ['1', '2', '3', '4', '5'];
// array1.description();
// array2.description();
//
// const book1 = new book('Goblet of Fire','JK Rowling', 2005);
// const author1 = new author('Terry Pratchett', 'Dark Shadows', 1990);
//
// console.log(book1);
// console.log(book1.getSummary());
// console.log(book1.logSomething());
// console.log(author1.logSomething());


// CLASSES
class Car {
  constructor(make, model, year, colour) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.colour = colour;
  }
  getSummary() {
    return `The ${this.colour} ${this.make} ${this.model} was made in ${this.year}`
  }
}

const car1 = new Car('BMW', 'X5', 2010, 'black');

console.log(car1);
console.log(car1.getSummary());
