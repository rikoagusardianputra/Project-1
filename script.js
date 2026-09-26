const tombolGelap = document.getElementById("tombol-gelap");

tombolGelap.addEventListener('click', function (e) {
    e.preventDefault();
    document.body.classList.toggle('dark-mode');
})

const menuHamburger = document.getElementById('menu-hamburger');
const navMenu = document.getElementById('nav-menu');;

menuHamburger.addEventListener('click', function () {
    navMenu.classList.toggle('active-navbar');
})