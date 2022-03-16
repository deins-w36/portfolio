
const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeMenu = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeMenu.addEventListener('click', () => {
    menu.classList.remove('active');
});



//Progress

const counter = document.querySelectorAll('.skills__rating-progress'),
      progressBar = document.querySelectorAll('.skills__rating-progbar span');

counter.forEach((item, i) => {
    progressBar[i].style.width = item.textContent;
});