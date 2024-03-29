document.addEventListener('DOMContentLoaded', function() {
    let countPhotos;
    let burger = document.querySelector('.header__burger');
    let navItem = document.querySelectorAll('.nav__item');


    if (window.innerWidth > 1200) {
        countPhotos = 5;
    } else if (window.innerWidth > 992) {
        countPhotos = 4;
    } else if (window.innerWidth > 768) {
        countPhotos = 3;
    } else if (window.innerWidth > 576){
        countPhotos = 2;
    } else {
        countPhotos = 1;
    }
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: countPhotos,
        navigation: {
            nextEl: ".button-next",
            prevEl: ".button-prev",
        },
    });

    var swiper2 = new Swiper(".swiper2", {
        slidesPerView: 1,
        navigation: {
            nextEl: ".button-next2",
            prevEl: ".button-prev2",
        },
    });
    
    burger.addEventListener('click', function() {
        let b = document.querySelector('.header__nav');

        if ( b.classList == 'header__nav') {
            b.classList.add('active');
        } else {
            b.classList.remove('active');
        }     
    });

    function navDisable() {
        let b = document.querySelector('.header__nav');

        b.classList.remove('active');
    }

    navItem.forEach(el => {
        el.addEventListener('click', function() {
            navDisable();
        });
    });

    
})
