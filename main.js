const btn = document.querySelector('#menu__btn');
const overlay = document.querySelector('.overlay');
const mobileMenu = document.querySelector('.mobile__menu');
const counters = document.querySelectorAll('counter');

btn.addEventListener('click', navToggle);

function navToggle() {
  btn.classList.toggle('open');
  overlay.classList.toggle('overlay__show');
  document.body.classList.toggle('stop__scrolling');
  mobileMenu.classList.toggle('bring__menu__from__right');
}

function countUp() {
  counters.forEach((counter) => {
    counter.innerText = '0';

    const updateCounter = () => {
      const target = +counter.getAttribute('data-target');

      const c = +counter.innerText;

      // create an increment
      const increment = target / 100;

      if (c < target) {
        counter.innerText = `${Math.ceil(c + increment)}`;
      }
    };

    updateCounter();
  });
}

countUp();
