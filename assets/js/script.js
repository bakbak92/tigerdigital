const btnNext = document.querySelector('.btn-next');
const btnPrev = document.querySelector('.btn-previous');

const reviews = document.querySelectorAll('.review');
let index = 0;
console.log(reviews)

btnNext.addEventListener('click', () => {
    reviews[index].classList.remove('active');
    index++;
    if (index > reviews.length - 1) {
        index = 0;
    }
    reviews[index].classList.add('active');
});

btnPrev.addEventListener('click', () => {
    reviews[index].classList.remove('active');
    index--;
    if (index < 0) {
        index = reviews.length - 1;
    }
    reviews[index].classList.add('active');
});

const btnMenu = document.querySelector('.fa-bars');
const navMobile = document.querySelector('.nav-dropdown');
const btnTimes = document.querySelector('.fa-times');

const linkDropdown = document.querySelectorAll('.nav-dropdown a');
btnMenu.addEventListener('click', () => {
    navMobile.classList.add('active');
});

btnTimes.addEventListener('click', () => {
    navMobile.classList.remove('active');
});

linkDropdown.forEach((link) => {
    link.addEventListener('click', () => {
        navMobile.classList.remove('active');
    });
});