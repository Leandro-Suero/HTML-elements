// ANIMATIONS
document.addEventListener("DOMContentLoaded", function(event) { 
    TweenMax.to('.logo', 1.5, {left: '20px', ease: Back.easeOut });
});

// NAVIGATION TOGGLE
document.querySelector('.menu').addEventListener('click', function(e) {

    let navigation = document.querySelectorAll('nav');
    for (let i=0;i<navigation.length;i++) {
        navigation[i].classList.toggle('active');
    }
    let menu = document.querySelectorAll('menu');
    for (let i=0;i<menu.length;i++) {
        menu[i].classList.toggle('active');
    }
});