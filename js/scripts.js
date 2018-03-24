let menu_button = document.querySelector(".header__icon"),
    menu = document.querySelector(".navbar"),
    nav = document.querySelector("nav"),
    social = document.querySelector(".social");



    menu_button.addEventListener("click", function() {
            menu.classList.toggle("is--closed");
            nav.classList.toggle("is--closed");
    });
