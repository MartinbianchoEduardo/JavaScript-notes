"use strict";

///////////////////////////////////////
// // Default Parameters
// const bookings = [];

// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
//   // ES5
//   // numPassengers = numPassengers || 1;
//   // price = price || 199;

//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('LH123');
// createBooking('LH123', 2, 800);
// createBooking('LH123', 2);
// createBooking('LH123', 5);

// createBooking('LH123', undefined, 1000);

// ///////////////////////////////////////
// // How Passing Arguments Works: Values vs. Reference
// const flight = 'LH234';
// const jonas = {
//   name: 'Jonas Schmedtmann',
//   passport: 24739479284,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.name = 'Mr. ' + passenger.name;

//   if (passenger.passport === 24739479284) {
//     alert('Checked in');
//   } else {
//     alert('Wrong passport!');
//   }
// };

// // checkIn(flight, jonas);
// // console.log(flight);
// // console.log(jonas);

// // Is the same as doing...
// // const flightNum = flight;
// // const passenger = jonas;

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 100000000000);
// };

// newPassport(jonas);
// checkIn(flight, jonas);

// ///////////////////////////////////////
// // Functions Accepting Callback Functions
// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// // Higher-order function
// const transformer = function (str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);

//   console.log(`Transformed by: ${fn.name}`);
// };

// transformer('JavaScript is the best!', upperFirstWord);
// transformer('JavaScript is the best!', oneWord);

// // JS uses callbacks all the time
// const high5 = function () {
//   console.log('????');
// };
// document.body.addEventListener('click', high5);
// ['Jonas', 'Martha', 'Adam'].forEach(high5);

///////////////////////////////////////
// // Functions Returning Functions
// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greeterHey = greet("Hey");
// greeterHey("Jonas");
// greeterHey("Steven");

// greet("Hello")("Jonas");

// const greetArrow = (greeting) => (name) => console.log(`${greeting} ${name}`);
// const greeterHi = greetArrow("hi");
// greeterHi("jonas");

// const lufthansa = {
//   airline: "Lufthansa",
//   iataCode: "LH",
//   bookings: [],
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//   },
// };

// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//   console.log(this);
//   this.planes++;
//   console.log(this.planes);
// };

// // document.querySelector(".buy").addEventListener("click", lufthansa.buyPlane);

// //in an event listener, the this keyword points to the element (.buy in this case)
// //so we use the .bind() method - to bind the this keyword to what we want

// document
//   .querySelector(".buy")
//   .addEventListener("click", lufthansa.buyPlane.bind(lufthansa));

// //the bind method can also set the parameters to be fixed
// //the first param is the this keyword bind and the following are the function params

// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.2, 200));

// const addTax23 = addTax.bind(null, 0.23); //null because 'this' is not necessary
// console.log(addTax23(100));

// //IIFE - immediately invoked function expressions
// (function () {
//   console.log("this will run only once");
// })();
// //wraping it inside () will make it a expression
// //we call it by adding the () at the end of the function
// (() => console.log("this will also never run again"))();

//closure
const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(passengerCount);
  };
};

const booker = secureBooking();
booker();
booker();

//how can booker() acces the passengerCount variable?
//any function will always have access to the environment of the execution context
//in which the function was created, even after that execution context is gone
//since the booker function was born in the context of secureBooking, it will get
// to that variable environment
//this connection between the functions is called Closure

//this is fully automatic, we don't have to manually create this connections

const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`boarding all ${n} passengers`);
    console.log(`there are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`will start boarding in ${wait}`);
};

boardPassengers(10, 3);

//the function can use all the variables that were created in the environment it was created
//n and perGroup
