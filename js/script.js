var swiper1 = new Swiper(".customSwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 6000,  // Tiempo en milisegundos para cada slide (3 segundos)
        disableOnInteraction: false,  // Mantiene el autoplay incluso cuando se interactúa con los botones
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    // breakpoints: {
    //     640: { // Para pantallas mayores a 640px
    //         slidesPerView: 2,     // Mostrar 2 diapositivas
    //         spaceBetween: 20,     // Espacio de 20px entre las diapositivas
    //     },
    //     768: { // Para pantallas mayores a 768px
    //         slidesPerView: 3,     // Mostrar 3 diapositivas
    //         spaceBetween: 30,     // Espacio de 30px entre las diapositivas
    //     },
    //     1024: { // Para pantallas mayores a 1024px
    //         slidesPerView: 4,     // Mostrar 4 diapositivas
    //         spaceBetween: 40,     // Espacio de 40px entre las diapositivas
    //     },
    // }
});

var swiper2 = new Swiper(".mySwiper-2", {
    slidesPerView: 6,
    spaceBetween: 15,
    loop: true,
    autoplay: {
        delay: 2000,  // Tiempo en milisegundos para cada slide (3 segundos)
        disableOnInteraction: false,  // Mantiene el autoplay incluso cuando se interactúa con los botones
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 2
        },
        520: {
            slidesPerView: 3
        },
        950: {
            slidesPerView: 6
        },
    }
});



// Evento para el scroll de la barra de busquedas, hace qyue suba o baje
window.onscroll = () => {
    navbar.classList.remove('active'); // Remueve la clase 'active' en el navbar
   
};

let lastScrollTop = 0; // Variable para saber la última posición del scroll

window.addEventListener("scroll", function() {
    let navbar = document.querySelector(".header"); // Seleccionamos la barra de navegación
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        // Si el usuario hace scroll hacia abajo, ocultamos la navbar
        navbar.style.top = "-100px"; // Desplaza la navbar fuera de la vista (ajusta este valor a la altura de tu navbar)
    } else {
        // Si el usuario hace scroll hacia arriba, mostramos la navbar
        navbar.style.top = "0"; // Restablece la navbar a la parte superior
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Evita que se vuelva negativo
});



document.addEventListener('DOMContentLoaded', function () {
    let navbar = document.querySelector('.navbar');
    let menuBtn = document.querySelector('#menu-btn');

    // Evento para el botón de menú
    menuBtn.onclick = () => {
        navbar.classList.toggle('active'); // Alterna la clase 'active' en el navbar
    }
});
