var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 1000,
    loop: true,
    autoplay: {
        delay: 3000, // Change slide every 3 seconds (adjust as needed)
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});