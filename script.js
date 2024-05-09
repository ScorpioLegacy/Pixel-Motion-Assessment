document.addEventListener('DOMContentLoaded', () => {
    var burgerMenu = document.querySelector('.burger-menu')
    var navItems = document.querySelector('.nav-items')
    var closeBtn = document.querySelector('.close-btn')

    burgerMenu.addEventListener('click', () => {
        navItems.classList.toggle('active')
    })

    closeBtn.addEventListener('click', () => {
        navItems.classList.remove('active');
    });

})