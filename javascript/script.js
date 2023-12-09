// Toggle Class Active
const navbarNav = document.querySelector('.navbar-nav');

// Ketika Menu di click
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

// Click diluar sidebar untuk menghilangkan nav
const menu = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e) {
    if(!menu.contains(e.target) && !navbarNav.contains(e.target))
    navbarNav.classList.remove('active');
});