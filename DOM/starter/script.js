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
