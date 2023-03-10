'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
countriesContainer.style.opacity = 1;

//synchronous code is executed line by line
//each line of code waits for precious line to finish
//long running operations block code execution

//async code is executed after a task that runs in the background finishes
//execution doesn't wait for async code to continue running

//AJAX
//Asyncrhonous Js And Xml
//to communicate with remote web servers in an asynchronous way
//with ajax is possible to request data from server in a dynamic way
//without reloading the page

//   //old way
// const getCountryData = function (country) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v2/name/${country}`);
//   // console.log(request);
//   request.send();

//   request.addEventListener('load', function () {
//     //the request response is in the .responseText property

//     //json to js object
//     const [data] = JSON.parse(this.responseText);
//     //the destructuring is because the data comes in an array
//     console.log(data);

const getJSON = function (url, errorMsg = 'something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

    return response.json();
  });
};

const renderCountry = function (data, className = '') {
  const html = `
        <article class="country ${className}">
                <img class="country__img" src="${data.flag}" />
                <div class="country__data">
                    <h3 class="country__name">${data.name}</h3>
                    <h4 class="country__region">${data.region}</h4>
                    <p class="country__row"><span>👫</span>${(
                      +data.population / 1000000
                    ).toFixed(1)}M people</p>
                    <p class="country__row"><span>🗣️</span>${
                      data.languages[0].name
                    }</p>
                    <p class="country__row"><span>💰</span>${
                      data.currencies[0].name
                    }</p>
                </div>
                </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
};

//modern way - fetch()
//returns a promise - an placeholder object for the future result of an asyn operation
//placeholder for a future value (like a response from ajax call for instance)
//can be fulfilled (value is available) or rejected (error)
const getCountryData = function (country) {
  //the promise must be consumed, done with .then()
  //.then(callback to when promiseis  fulfilled, callback to when fetch is rejected)

  fetch(`https://restcountries.com/v2/name/${country}`)
    .then(
      response => {
        //catching errors
        //in this case (and probably many others) the response object has an 'ok' bollean property
        //if the status code is 404 it returns ok: false - if status code 200 returns ok: true
        if (!response.ok)
          throw new Error(`Country not found ${response.status}`);
        //throw immediately stops the function and rejects the promise

        return response.json();
      } //but this is also an async function (so will return another promise)
      //call .then() to handle the fetch() promise
      //in order to actually read the response:
      //to handle this new promise we call another .then() (thats why we return it - to be able to chain the methods)
      //the data we're looking for comes from this response.json()
    )
    .then(data => renderCountry(data[0]))
    .catch(err => console.error(`${err} error caugth`));
};
// getCountryData('brazol');
// getCountryData('brazil');
// getCountryData('korea');

//*the value returned from a then() will be the the parameter for the chained .then() function*
// fetch(url).then(a => return a).then(data => console.log(data))
//this will log data in the console (because it was returned by the first .then())
//this happens if the promise is fulfilled
//if the promise is rejected, we handle in other ways

//handle rejected promises
//add .catch(callback) in the end of the .then() chain
//this will handle any error anywhere in the promise chain

//.finally(callback) - the other (third and maybe last) promise method
//the callback function will always be called, no matter if the promise is fullfilled or rejected

// //Challenge 1
// const whereAmI = function (lat, lng) {
//   fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`).then(response =>
//     response.json().then(data =>
//       fetch(`https://restcountries.com/v2/name/${data.country}`)
//         .then(response => response.json())
//         .then(data => renderCountry(data[0]))
//     )
//   );
// };

// whereAmI(52.508, 13.381);

// //consuming promises with async and await
// //create a special 'async' function
// //this function will keep running in the background until it returns a promise
// //an async function can have one or more 'await' statements
// const whereAmI = async function (country) {
//   //after 'await' we need a promise (here we'll use the one returned by a fetch())
//   const response = await fetch(`https://restcountries.com/v2/name/${country}`);
//   //'await' will stop the execution of this function until the promise is fullfilled

//   // //this is exactly the same as this:
//   // fetch(`https://restcountries.com/v2/name/${country}`).then(response =>
//   //   console.log(response)
//   // );

//   const data = await response.json();
//   renderCountry(data[0]);

//   // renderCountry(data[0]);
// };

// whereAmI('brazil');

////////////////////////////////////////////////////////////////////////
//error handling async await statements with try...catch

const whereAmI = async function (country) {
  //will try to execute the code inside the block
  try {
    //after 'await' we need a promise (here we'll use the one returned by a fetch())
    const response = await fetch(
      `https://restcountries.com/v2/name/${country}`
    );
    if (!response.ok) throw new Error('problem getting country by name');
    //'await' will stop the execution of this function until the promise is fullfilled

    // //this is exactly the same as this:
    // fetch(`https://restcountries.com/v2/name/${country}`).then(response =>
    //   console.log(response)
    // );

    const data = await response.json();
    renderCountry(data[0]);
    //catch has access to whatever error occurs in the block
  } catch (err) {
    console.log(err + ' <- this error message was created above');
  }
};

whereAmI('korea');
whereAmI('brazil');
whereAmI('vatican');

const get3Countries = async function (c1, c2, c3) {
  try {
    //destructuring because the data comes inside an array
    // const [data1] = await getJSON(`https://restcountries.com/v2/name/${c1}`);
    // const [data2] = await getJSON(`https://restcountries.com/v2/name/${c2}`);
    // const [data3] = await getJSON(`https://restcountries.com/v2/name/${c3}`);

    //this will make so each getJSON() will wait for the other to stop before executing
    //and is doesn't make much sense to do this

    //so we can run all three getJSON() calls at the same time (in parallel):
    //Promise.all takes an array of promises and return one promise out of that lot
    //if one promise rejects, Promise.all will reject
    const data = await Promise.all([
      getJSON(`https://restcountries.com/v2/name/${c1}`),
      getJSON(`https://restcountries.com/v2/name/${c2}`),
      getJSON(`https://restcountries.com/v2/name/${c3}`),
    ]);

    data.map(d => console.log(d[0].capital));
  } catch (err) {
    console.error(err);
  }
};

get3Countries('brazil', 'argentina', 'colombia');

//Promise.race exists as well
//pass an array of promises and they will race against each other
//the first one fulfilled or rejected will be returned
//this is good to set timeouts
//Promise.race([getJson(url), time to user timeout])
