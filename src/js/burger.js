

//burger menu

const burger = document.querySelector('.burger'),
    menu = document.querySelector('.menu'),
    body = document.querySelector('body'),
    items = document.querySelectorAll('.menu__item');

const toggle = () => {
    burger.classList.toggle('is-active');
    menu.classList.toggle('is-active');
    body.classList.toggle('is-active');
}

//callback in DOM
// if (window.innerWidth < 768) {
//     burger.addEventListener('click', () => toggle(burger));
//     items.forEach((item, i) => { item.addEventListener('click', () => toggle(item)) });
// };