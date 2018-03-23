let menu_button = document.querySelector(".header__icon");
let menu = document.querySelector(".navbar");
let nav = document.querySelector("nav");



    menu_button.addEventListener("click", function() {
            menu.classList.toggle("is--closed");
            nav.classList.toggle("is--closed");
    });
