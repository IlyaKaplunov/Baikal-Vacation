const burger = document.querySelector('.header__burger');

if (burger) {
    const menu = document.querySelector('.menu');
    burger.addEventListener('click', function(e) {
        document.body.classList.toggle('lock');
        burger.classList.toggle('active');
        menu.classList.toggle('active');
    });
}

const burger2 = document.querySelector('.footer__burger');

if (burger2) {
    const menu2 = document.querySelector('.footer__nav');
    burger2.addEventListener('click', function(e) {
        document.body.classList.toggle('lock');
        burger2.classList.toggle('active');
        menu2.classList.toggle('active');
    });
}