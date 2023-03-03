'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

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

//modern way - fetch
//returns a promise - an placeholder object for the future result of an asyn operation
//placeholder for a future value (like a response from ajax call for instance)
//can be fulfilled (value is available) or rejected (error)
const getCountryData = function (country) {
  fetch(`https://restcountries.com/v2/name/${country}`)
    .then(function (response) {
      //call .then() to handle the fetch() promise
      console.log(response);
      //in order to actually read the response:
      return response.json(); //but this is also an async function (so will return another promise)
      //to handle this new promise we call another .then() (thats why we return it - to be able to chain the methods)
      //the data we`re looking for comes from this response.json()
    })
    .then(function (data) {
      console.log(data);
      renderCountry(data[0]);
    });
};
//the promise must be consumed, done with the .then()
//.then(call back function - will be called as soon as promise fulfilled)

getCountryData('vatican');
// getCountryData('korea');
countriesContainer.style.opacity = 1;
