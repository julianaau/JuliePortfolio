// Mobile Menu

var menuBtn = document.getElementsByClassName('menu-btn');
var mobileMenu = document.getElementsByClassName('mobile-menu');

var menuActive = function () {
    mobileMenu[0].classList.toggle('active');
}

menuBtn[0].addEventListener('click', menuActive);
