const restaurant = {
  name: "classico italiano",
  location: "via angelo 23,  firenze, italy",
  categories: ["italian", "pizzeria", "vegetarian", "organic"],
  starterMenu: ["focaccia", "bruschetta", "garlic bread", "caprese salad"],
  mainMenu: ["pizza", "pasta", "risotto"],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

// const { name, openingHours, categories } = restaurant;
// console.log(openingHours.thu);

// console.log(`the restaurant opens at ${openingHours.thu.open}`);

// // DESTRUCTURING
// // unpack arrays/objects into variables, retrieve data from an array/object and store it in variables
// const arr = [2, 3, 4];
// const [a, b, c] = arr;
// console.log(a, b, c);

// //for arrays - const [name of the new vaiable(s), --same--] = name of the array you want to get them from
// //each spot in the names of the variables ^^^ will be one spot from the array used
// //e.g. [1, 2] = array - will get the first two items of the array
// //e.g. [1, , 3] = array - will get the first and third item (hence the space in the 2nd item)
// //for objects, switch the [] for {}

// //giving default values and creating new variables (e.g. starters) to store attributes
// const { menu = [], starterMenu: starters = [] } = restaurant;
// //the empty arrays represent the default value, in case the value doesn't exist already
// // without it, we get undefined
// console.log(menu, starters);

//mutating variables
// let a = 1;
// let b = 9;
// const obj = { a: 23, b: 7, c: 14 };
// //wrap inside parenthesis to prevent error
// ({ a, b } = obj);
// // console.log(a, b);

// //nested objects
// const {
//   fri: { open, close },
// } = openingHours;
// // console.log(open, close);

// // the spread operator
// //return multiple values separeted by a comma
// const arr = [1, 2, 3, 4];

// const newArr = [...arr, 5, 6];
// console.log(newArr);

// console.log(...newArr);

const newMenu = [...restaurant.mainMenu, "gnocci"];
// console.log(newMenu);
//the spread operator can only be used in places where commas would be used
//as it doesn't create new variables, but takes all the elements out of an array

//copy array
const mainMenuCopy = [...restaurant.mainMenu];

//join two arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

const str = "jonas";
const letters = [...str];
// console.log(...str);

const orderPasta = (ing1, ing2, ing3) => {
  console.log("here is your pasta with " + ing1, ing2, ing3);
};

// const ingredients = [prompt('common'), prompt('common'), prompt('common')];
// orderPasta(...ingredients);

//this need to be inside a object
const copy = { ...restaurant };
// console.log(copy);

//REST OPERATOR

//the spread operator comes in the fight side of the =
//the rest operator comes in the left side of the =

//spread
const spreadArr = [1, 2, 3, ...menu];

//called rest that because it takes the rest of the elements
//and put them in new array (usually called others)
//rest (used with destructuring)
const [x, y, ...others] = [menu];

//objects
const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

//functions
//this function accept any number of parameters
// const add = function (...numbers) {
//   console.log(numbers);
// };

// add(1, 2, 3, 4, 5);
// add(4, 8, 9);
// add(90);

// const xarray = [1, 2, 3];
// add(...xarray);

// const atLeastOneIngredient = (minIngredient, ...optionalIngredients) => {
//   console.log(minIngredient, optionalIngredients);
// };

// atLeastOneIngredient('potato', 'mushroom', 'spi');
// atLeastOneIngredient('spinach');

// const rest1 = {
//   guests: 10,
//   name: 'jaja',
// };

//OR ASSIGNMENT OPERATOR
//if numguse doesn't exist, it will be 12
// rest1.numguse ||= 12;

// console.log(rest1);
//but if the numguse already exists and is 0 (a thruthy value for the operator) then he shows 12
//so to fix this we use the NULLISH ASSIGNMENT OPERATOR (??)
// rest1.numguse ??= 10;
//if numguse is NULL or UNDEFINED, then the value is 10
//only nullish values (null and undefined) will shorthand the operation

//SHORT CIRCUITING
//----OR----
// const guestsInRest1 = rest1.guests || 10;
//if rest1.guests exists (is true), it short circuits and stop the evaluation
//so guestsInRest1 will be assigned with the rest1.guests number

//if rest1.guests is falsy (0, '', undefined, null...) then the second value (10) will be assigned

//-----AND----
// rest1.orderPasta && rest1.orderPasta('pesto', 'carbonara');
//if the function orderPasta is truthy (if it exists) then the function will be called by the next operand
//if it doesn't exist then it will stop there and do nothing
//assigningn with the AND operator
// rest1.owner &&= 'john';
//if .owner was truthy, it would be replaced by john
// rest1.numguse &&= 'john';
// console.log(rest1.numguse);
//this replaced numguse for john
//because numguse exists, then it goes to the second operand

//--------FOR OF------
// const wholeMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// for (const item of wholeMenu) console.log(item);
//when we need index
// for (const [i, element] of wholeMenu.entries()) {
//   console.log(i, element);
// }
// console.log([...menu.entries()]);
//the .entries() creates a new array for the element inside the array (index, value)

// restaurant.openingHours.thu && console.log(restaurant.openingHours.thu.open);

//OPTIONAL CHAINING
// console.log(restaurant.openingHours.mon?.open);
//if everything behind the ? exists, search for the thing in the right
//if the restaurant opens monday, will return the opening hour
// console.log(restaurant.openingHours?.mon?.open);
//can do many times

// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   //default value = closed
//   console.log(day, open);
// }

//works for mehotds too
// restaurant.orderPasta?.('mushroom'. 'pesto');
//if it exists, will be called

// const users = [, { name: 'brad' }];
// console.log(users[0]?.name ?? "doesn't have name");

//LOOPING OBJECTS

// //looping property names (keys)
// console.log(Object.keys(openingHours));
// //.keys gives an array
// for (const day of Object.keys(openingHours)) {
//   console.log(day);
// }

// //property values
// const values = Object.values(openingHours);
// console.log(values);

//entries
// const entries = Object.entries(openingHours);
// console.log(entries);
// //this way we get each key and each value into arrays

// //looping trough entries using destructuring ( {open, close} )
// for (const [key, { open, close }] of entries) {
//   console.log(`we are open on ${key} from ${open} to ${close}`);
// }
//entries gives open(0) and the time(1)

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnabry", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// // 1.
// for (const [i, player] of game.scored.entries())
//   console.log(`Goal ${i + 1}: ${player}`);

// // 2.
// const odds = Object.values(game.odds);
// let average = 0;
// for (const odd of odds) average += odd;
// average /= odds.length;
// console.log(average);

// // 3.
// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
//   console.log(`Odd of ${teamStr} ${odd}`);
// }
// // Odd of victory Bayern Munich: 1.33
// // Odd of draw: 3.25
// // Odd of victory Borrussia Dortmund: 6.5

// // BONUS
// // So the solution is to loop over the array, and add the array elements as object properties, and then increase the count as we encounter a new occurence of a certain element
// const scorers = {};
// for (const player of game.scored) {
//   scorers[player] ? scorers[player]++ : (scorers[player] = 1);
// }
// console.log(Object.entries(scorers));

//SETS
//to create a set, it must be passed in its parameters an iterable
// const repeatingArray = ['pizza', 'pasta', 'risotto', 'pizza', 'pizza', 'pasta'];
// const orderSet = new Set(repeatingArray);
// //a set remove duplicates
// console.log(orderSet.size);
// console.log(orderSet.has('pizza'));
// orderSet.add('garlic bread');
// orderSet.delete('pizza');
// // orderSet.clear();
// console.log(orderSet);
//there's no way to retrieve data from a set
//no need because set is made to store unorderded items
//just use the .has method to see if it is in there

//if you want to store ordered data and the retrieve it, use array instead

//looping sets is possible
// for (const order of orderSet) console.log(order);

// //MAPS
// //used to map values with keys
// //the keys can be of any type (objects, arrays, strings, numbers, other maps, html elements...)
// const rest = new Map();
// rest.set('name', 'classico italiano');
// rest.set(1, 'firenze');
// console.log(rest.set(2, 'milano'));
// //the set method add the key and value you passed and returns the set
// //this means that .set can be chained
// rest
//   .set('categories', ['italian', 'good food', 'vegetarian'])
//   .set('open', 11)
//   .set('close', 23);

// console.log(rest.get('name'));
// console.log(rest.get(1));

// console.log(rest.has('categories'));
// console.log(rest.has('italian'));
// //the .has only applies for keys
// rest.delete(1);
// console.log(rest.size);
// // rest.clear()''

// rest.set(document.querySelector('h1'), 'heading');
// console.log(rest);

// const question = new Map([
//   ['question', "who's the best football player in the world?"],
//   [1, 'messi'],
//   [2, 'luis suarez'],
//   [3, 'everton gadino'],
//   ['correct', 3],
//   [true, 'nice'],
//   [false, 'try again'],
// ]);

// console.log(question);
// console.log(Object.entries(openingHours));
// //maps return the same structure (key, value) as when we call Object.entries()
// //this means there's an easy way to turn objects into maps
// //the structure returned by Object.entries() is eactly the same needed to initialize a map
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// //loopig maps
// console.log(question.get('question'));

// for (const [key, value] of question) {
//   typeof key === 'number' && console.log(`answer ${key}: ${value}`);
// }

// console.log(question.entries());
// console.log(question.keys());
// console.log(question.values());

// /*
// 1. Create an array 'events' of the different game events that happened (no duplicates)
// 2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
// 3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
// 4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
//       [FIRST HALF] 17: ⚽️ GOAL

// GOOD LUCK 😀
// */

// const gameEvents = new Map([
//   [17, '⚽️ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽️ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽️ GOAL'],
//   [80, '⚽️ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);

// //convert set in array
// const events = [...new Set(gameEvents.values())];
// console.log(events);

// gameEvents.delete(64);

// console.log(
//   `an event happened, in average, every ${90 / gameEvents.size} minutes`
// );

// let half;
// for ([key, value] of gameEvents) {
//   half = '[FIRST HALF]' ? key < 45 : (half = '[SECOND HALF]');
//   console.log(half, key, value);
// }

// // STRINGS
// const airline = 'TAP Air Portugal';
// const plane = 'A320';

// console.log(airline.length);
// console.log(airline.indexOf('r')); //first appearance
// console.log(airline.lastIndexOf('r'));
// console.log(airline.indexOf('Portugal')); //case sensitive

// //extract parts of strings using .slice
// console.log(airline.slice(4)); //starts at index 4
// console.log(airline.slice(4, 7)); //end - beggining ---> it won't get the 7th
// //gets the beggining one and ends before the ending one
// console.log(airline.slice(0, airline.lastIndexOf('Portugal')));

// const checkSeat = seat => {
//   //B and E are middle seats
//   const char = seat.slice(-1);
//   char === 'B' || char === 'E'
//     ? console.log('you got the middle seat')
//     : console.log('you got a nice seat');
// };

// checkSeat('11B');
// checkSeat('185C');

// console.log(airline.toLowerCase);
// console.log(airline.toUpperCase);
// const passenger = 'MIcHaEl';
// function correctCase(name) {
//   const lower = name.toLowerCase();
//   const firstChar = name[0].toUpperCase();
//   return firstChar + lower.slice(1);
// }
// console.log(correctCase(passenger));
//trim strings
const uglyString = "  this is way off \n ";
console.log(uglyString);
console.log(uglyString.trim());

//replacing
const toBeReplaced = "R$1500,00";
const replaced = toBeReplaced.replace("R$", "$").replace(",", ".");
console.log(replaced);
//doesn't mutate the string, creates a new one
console.log(toBeReplaced.replaceAll("0", "9"));

//(almost (?)) all fucntions are case sensitive

//return booleans:
const plane = "A320neo";
console.log(plane.includes("A320"));
console.log(plane.startsWith("Airbus"));
console.log(plane.endsWith("neo"));

//split strings
//return an array of the splitted items
const toBeSplitted = "a+b+c+d";
const splitted = toBeSplitted.split("+");
console.log(splitted);
//output: [a, b, c, d]
const myName = "Eduardo Martinbiancho";
const [firstName, lastName] = myName.split(" ");
console.log(firstName, lastName);

//joining items
//join using a character between array items
const newName = ["Mr", firstName, lastName.toUpperCase()];
console.log(newName.join(" "));

//capitalize names
const capitalize = (name) => {
  const names = name.split(" ");
  const capitalizedNames = [];
  names.forEach((el) => {
    // capitalizedNames.push(el[0].toUpperCase() + el.slice(1));
    //also possible:
    capitalizedNames.push(el.replace(el[0], el[0].toUpperCase()));
  });
  return capitalizedNames.join(" ");
};
console.log(capitalize("eduardo kohut martinbiancho"));

//padding a string
//add characters to make the string a specific length
const toBePadded = "jonas brothers";
console.log(toBePadded.padStart(20, "-+-01"));
//first param - length of the new string, second param - char to add

//mask info
const creditCardNumber = 8593638894120844; //notice this is of tyoe Number
const maskInfo = (number) => {
  const str = number + ""; //the result of this will be a number but typed String
  //because if one of the operands in the + sign is a string, the whole operation will be turned into a string
  const last = str.slice(-4);
  return last.padStart(str.length, "*");
};

console.log(maskInfo(creditCardNumber));

//repeat
const message = "bad weather all - departures delayed ";
console.log(message.repeat(5));

//challenge
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

// const flights1 = flights.split('+');
// for (fli of flights1) {
//   flights2.push(fli.toUpperCase().replaceAll('_', ' ').trim().split(';'));
// }

const curate = (string) => string.replaceAll("_", " ").trim();

for (flight of flights.split("+")) {
  const [stts, from, to, time] = flight.split(";");

  console.log(
    `${
      stts.includes("DELAYED") ? `# ${curate(stts)}` : curate(stts)
    } from ${curate(from.slice(0, 3)).toUpperCase()} to ${to
      .slice(0, 3)
      .toUpperCase()} (${time.replaceAll(":", "h")})`
  );
}
