;(function() {
    // toggle menu
    document.querySelector('.header__menu').addEventListener('click', function() {
        var container = document.querySelector('.header');
        container.classList.toggle('header--menu-visible');
    });
})();
