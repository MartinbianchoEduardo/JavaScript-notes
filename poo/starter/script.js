'use strict';

// //state == objects data
// //behavior == methods

// //all objects in js are linked to a prototype object
// //the prototype object contains methods that all objects linked can use
// //objects inherit methods and properties from the prototype
// //(prototype inheritance) - an instance inheriting from a class

// const Person = function (name, age) {
//   this.name = name;
//   this.age = age;

//   //never create methods inside a constructor function
// };

// const jonas = new Person('jonas', 81);

// // Prototypes
// Person.prototype.toString = function () {
//   console.log(`${this.name} is ${this.age} years old`);
// };
// //every instance of Person will inherit the defined .prototype methods

// jonas.toString();
// console.log(jonas);
// //notice that jonas object only have the properties
// //the methods aren't in the object itself, since they are in its prototype

// //objects can inherit properties from the proyotype
// Person.prototype.species = 'homo sapiens';
// //species = new property, created now
// //however, this property will not be owned by the object, but inherited from its prototype
// //see .hasOwnProperty() method
// console.log(jonas.species);

// //challenge 1
// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(this.speed);
// };

// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(this.speed);
// };

// const veyron = new Car('bugatti', 190);
// const corvette = new Car('chevrolet', 120);
// console.log(corvette);
// corvette.brake();
// veyron.accelerate();
// veyron.accelerate();
// veyron.accelerate();
// corvette.accelerate();
// corvette.brake();
// veyron.brake();

// //ES6 Classes
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  //methods are added to the prototype of the object
  toString() {
    console.log(`${this.name} is ${this.age} years old`);
  }

  //getters and setters
  get birthYear() {
    return 2023 - this._age;
  }

  set age(age) {
    this._age = age;
  }

  //static method (dont go to prototype) explanation below
  static hey() {
    console.log(`Hey (${this.name})`);
    console.log(this);
  }
}

const john = new Person('john', 43);
// john.toString();

// //IMPORTANT
// //classes are NOT hoisted
// //classes are first class citizens (can pass/return them in/from functions)
// //classes are executed in strict mode

// //STATIC METHODS
// //static methods are methods that work only with the constructor of the object
// //these methods are not added in the .prototype
// //so the instances do not inherit them
// //we call static methods by stating the class name
// //i.e. Person.hey()
// Person.hey();
// //john.hey doesnt work because the instances do not inherit static methods
// john.hey();

//challenge 2
class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(this.speed + 'km/h');
  }

  brake() {
    this.speed -= 5;
    console.log(this.speed + 'km/h');
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const lfa = new Car('lexus', 230);
lfa.accelerate();
lfa.accelerate();
lfa.accelerate();
lfa.brake();
lfa.brake();

console.log(lfa.speedUS);
lfa.speedUS = 100;
console.log(lfa);
lfa.brake();
