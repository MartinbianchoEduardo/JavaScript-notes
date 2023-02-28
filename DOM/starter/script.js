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
// header.append(message);
//append() adds the element as the last child
//notice the cookie message is added only one time
//an elemente can only exist always one place at a time

// header.append(message.cloneNode(true));
//cloneNode(true) will make a clone of the selected element
//the true parameter means it will clone it's child elements also

// header.before(message);
// header.after(message);

//delete elements
// document
//   .querySelector('.btn--close-cookie')
//   .addEventListener('click', function () {
//     message.remove();
//   });

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

const section1 = document.querySelector('#section--1');
//smooth scrolling
const btnScrollTo = document.querySelector('.btn--scroll-to');
btnScrollTo.addEventListener('click', function () {
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

//operations tab
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');
  //finds the closest elemtns with this class name (operations__tab)

  if (!clicked) return;
  //if click in null target, stops the function

  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));

  //activate tab
  clicked.classList.add('operations__tab--active');

  //activate content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
  //since the class is named "data-tab" we select ".dataset.tab"
});

//nav fade hover
const handleHover = function (e, opacity) {
  if (
    e.target.classList.contains('nav__link') ||
    e.target.classList.contains('nav__logo')
  ) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
  }
};

const nav = document.querySelector('.nav');
nav.addEventListener('mouseover', handleHover.bind(0.5));

nav.addEventListener('mouseout', handleHover.bind(1));

// //sticky nav with intersection observer API
// const observerCallback = function (entries, observer) {};
// //this function will be called each time the target element (header) is intersecting
// //the root element at the treshold that we define below
// const observerOptions = {
//   root: null,
//   //root:null = root:viewport
//   threshold: [0, 0.2],
//   //the % of intersection at which the observer callback will be called
//   //this is the % of the viewport occupied by the target
//   //when the target is occupying this percentage, the callback will be called
// };

const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    nav.classList.add('sticky');
  } else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
  //to make it appear exaclty 90px away from the section (the size of the nav)
});
headerObserver.observe(header);
