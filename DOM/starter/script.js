'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//selecting elements
console.log(document.documentElement);
console.log(document.body);

const header = document.querySelector('.header');

document.getElementsByTagName('button');

document.getElementsByClassName('btn');

//creating and inserting elements
const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent = 'we use cookies for analytics';
message.innerHTML =
  'we use cookies for analytics. <button class="btn btn--close-cookie">Got it</button>';

// header.prepend(message);
//prepand() adds the element as the first child
header.append(message);
//append() adds the element as the last child
//notice the cookie message is added only one time
//an elemente can only exist always one place at a time

// header.append(message.cloneNode(true));
//cloneNode(true) will make a clone of the selected element
//the true parameter means it will clone it's child elements also

// header.before(message);
// header.after(message);

//delete elements
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();
  });

//styles
message.style.backgroundColor = '#37383d';
// message.style.width = '120%';

//get element style property
console.log(getComputedStyle(message).color);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 20 + 'px';
//the 10 is bacause of the number table

// document.documentElement.style.setProperty('--color-primary', 'orangered');

//attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);
//we can get the standard properties from elements
//i.e. standard properties are img = src, alt - a = href

//we cannot get non-standard attributes
//only with the getAttribute()
// console.log(logo.getAttribute('non-standard-attribute'));

//data attributes
//attributes that start with "data"
console.log(logo.dataset.versionNumber);
//these attributes are always stored in the dataset object
//notice that is necessary to transform the attribute name into camelCase
//from data-versio-number to dataset.versionNumber

//classes
// logo.classList.add();
// logo.classList.remove();
// logo.classList.toggle();
// logo.classList.contains(); //not 'includes'

//smooth scrolling
const btnScrollTo = document.querySelector('.btn--scroll-to');
btnScrollTo.addEventListener('click', function () {
  const section1 = document.querySelector('#section--1');
  section1.scrollIntoView({ behavior: 'smooth' });
});

//navigation
// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();

//     const id = this.getAttribute('href');
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });
//this is a good solution
//however, we are calling the same function to every element
//this would be terrible if we had lots of elements

//so we use event delegation
//by calling the function in a parent element
//1. add the event listener to common parent element
//2. determine what element originated the event
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});
