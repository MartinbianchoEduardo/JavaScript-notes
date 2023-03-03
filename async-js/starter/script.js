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

const getCountryData = function (country) {
  //old way
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v2/name/${country}`);
  // console.log(request);
  request.send();

  request.addEventListener('load', function () {
    //the request response is in the .responseText property

    //json to js object
    const [data] = JSON.parse(this.responseText);
    //the destructuring is because the data comes in an array
    console.log(data);

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
  });
};

getCountryData('usa');
getCountryData('brazil');
getCountryData('france');
countriesContainer.style.opacity = 1;
