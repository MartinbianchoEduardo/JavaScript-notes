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

const renderCountry = function (data, className = '') {
  const html = `
        <article class="country">
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
      //the data we`re looking for comes from this response.json()
    )
    .then(data => renderCountry(data[0]))
    .catch(err => console.error(`${err} error caugth`));
};
// getCountryData('brazol');
getCountryData('brazil');
getCountryData('korea');

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
