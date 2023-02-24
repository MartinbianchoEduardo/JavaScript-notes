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

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

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

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// //forEach loop in arrays
// movements.forEach(function (movement) {
//   movement < 0
//     ? console.log(`withdrawal of ${Math.abs(movement)}`)
//     : console.log(`deposit of ${movement}`);
// });
// //if we want the current index
// movements.forEach(function (movement, index, array) {
//   movement < 0
//     ? console.log(
//         `${index + 1}: withdrawal of ${Math.abs(movement)} in ${array}`
//       )
//     : console.log(`${index + 1}: deposit of ${Math.abs(movement)} in ${array}`);
// });
// //can get the current index and the whole array passing those parameters
// //the first is always the element, the second always the index and array is the third

// // forEach in maps
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function (value, key, map) {
//   console.log(key, value);
// });

// //forEach in sets
// const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
// currenciesUnique.forEach(function (value, key, map) {
//   console.log(key, value);
// });
// //the key and value parameters are exactly the same
// //but it's still required to pass those parameters

//map method
//the map method loop through an array and apply a callback function for each item
//returns a new array with the result
//arr.map(function (elem) {return do this for each elem})

//filter method
//filter the elements in an array
//elements for which the condition is true will be added to a new array and returned
//while writting the method, return a boolean value

//reduce method
//boils all array elements into a single value
//accumulator accumulates the values
//return acc + currentValue
//the first param of this method is the callback function
//the second param is the initial value of the accumulator

//bank project
const displayMovements = movements => {
  //first, empty the old elements
  containerMovements.innerHTML = '';
  //innerHTML returns all the html included, while innerText only the text

  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
    <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
          <div class="movements__value">${mov}</div>
      </div>
        `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
    //this will add the html written after the beggining of the containerMovements
    //check docs to view afterbegin, beforeend and other options
  });
};

displayMovements(account1.movements);

const calcDisplayBalance = function (movements) {
  const balance = movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${balance} EUR`;
};

calcDisplayBalance(account1.movements);

//maximum value
const max = movements.reduce(function (acc, mov) {
  if (acc > mov) return acc;
  else return mov; //this returns mov as the new acc
}, movements[0]);

console.log(max);
