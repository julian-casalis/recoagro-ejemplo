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
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 6000,  // Tiempo en milisegundos para cada slide (3 segundos)
        disableOnInteraction: false,  // Mantiene el autoplay incluso cuando se interactúa con los botones
    },
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        520: {
            slidesPerView: 2
        },
        950: {
            slidesPerView: 3
        },
    }
});


document.addEventListener('DOMContentLoaded', function () {
let navbar = document.querySelector('.navbar');
let searchForm = document.querySelector('.search-form');

// Evento para el botón de menú
document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active'); // Alterna la clase 'active' en el navbar
    // search-form.classList.remove('active'); // Remueve la clase 'active' en el formulario de búsqueda
}

// // Evento para el botón de búsqueda
// document.querySelector('#search-btn').onclick = () => {
//     search-form.classList.toggle('active'); // Alterna la clase 'active' en el formulario de búsqueda
// }

// Evento para el scroll de la ventana
window.onscroll = () => {
    navbar.classList.remove('active'); // Remueve la clase 'active' en el navbar
   
};
});

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

