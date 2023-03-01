'use strict';

//state == objects data
//behavior == methods

//all objects in js are linked to a prototype object
//the prototype object contains methods that all objects linked can use
//objects inherit methods and properties from the prototype
//(prototype inheritance) - an instance inheriting from a class

const Person = function (name, age) {
  this.name = name;
  this.age = age;

  //never create methods inside a constructor function
};

const jonas = new Person('jonas', 81);

// Prototypes
Person.prototype.toString = function () {
  console.log(`${this.name} is ${this.age} years old`);
};
//every instance of Person will inherit the defined .prototype methods

jonas.toString();
console.log(jonas);
//notice that jonas object only have the properties
//the methods aren't in the object itself, since they are in its prototype

//objects can inherit properties from the proyotype
Person.prototype.species = 'homo sapiens';
//species = new property, created now
//however, this property will not be owned by the object, but inherited from its prototype
//see .hasOwnProperty() method
console.log(jonas.species);
