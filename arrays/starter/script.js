'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// let arr = ['a', 'b', 'c', 'd', 'e'];

//slice (starts at ())
// console.log(arr.slice(2));
// //doesn't change the original array
// //return a copy of the array starting at the position given

// //splice
// //it does change the original array
// console.log(arr.splice(1));
// //deletes from the element at position 1
// console.log(arr);
// //used to delete elements in an array
// //returns the deleted content
// //params(index it will start deleting, number of elements to be deleted)

// reverse
// const arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse());
// //it does mutate the original array
// console.log(arr2);

// arr2.reverse();

// //concat
// const letters = arr.concat(arr2);
// console.log(letters);
// //concat arrays
// //it doesn't mutate any of the original arrays

// //could be done with the spread operator as well
// console.log([...arr, ...arr2]);

// //join
// console.log(letters.join('-'));
// //join array elements using a character of choice

// //at method
// console.log(arr.at(0));
// //almost the same as arr[0]
// //but the at method can be useful in some situations like:
// //getting the last index of an array
// console.log(arr2[arr2.length - 1]);
// console.log(arr2.slice(-1)[0]);
// //with at method is much cleaner
// console.log(arr2.at(-1));
//also works with Strings

////////////////////////////////////////////////////////////////

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//forEach loop
movements.forEach(function (movement) {
  movement < 0
    ? console.log(`withdrawal of ${Math.abs(movement)}`)
    : console.log(`deposit of ${movement}`);
});
//if we want the current index
movements.forEach(function (movement, index, array) {
  movement < 0
    ? console.log(
        `${index + 1}: withdrawal of ${Math.abs(movement)} in ${array}`
      )
    : console.log(`${index + 1}: deposit of ${Math.abs(movement)} in ${array}`);
});
//can get the current index and the whole array passing those parameters
//the first is always the element, the second always the index and array is the third
