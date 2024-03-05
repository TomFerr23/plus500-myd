document.addEventListener("DOMContentLoaded", function() {
    const menuButton = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');
    const closeButton = document.querySelector('.close-menu');

    menuButton.addEventListener('click', function() {
        navLinks.classList.add('nav-active');
    });

    closeButton.addEventListener('click', function() {
        navLinks.classList.remove('nav-active');
    });
});
