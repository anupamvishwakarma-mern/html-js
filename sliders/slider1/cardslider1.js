const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    spaceBetween: 30,
    // centeredSlides: true,
    grabCursor: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        // when window width is >= 320px
        0: {
            slidesPerView: 1,
        },
        // when window width is >= 480px
        720: {
            slidesPerView: 2,
        },
        // when window width is >= 640px
        1024: {
            slidesPerView: 3,
        }
    }

});