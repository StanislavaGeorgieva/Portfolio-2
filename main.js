/* const swiper = new Swiper(".swiper", {
    effect: "cube",
    allowTouchMove: false,
    grabCursor: false,
    cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
    }
});

swiper.sliderMove = function (s, e) {
    console.log(s);
};

function Navigate(indx) {
    for (let i of document.querySelectorAll(".Links li")) {
        i.classList.remove("activeLink");
    }
    Array.from(document.querySelectorAll(".Links li"))[indx].classList.add("activeLink");
    swiper.slideTo(indx, 1500, true);
} */
    const swiper = new Swiper(".swiper", {
        effect: "cube",
        allowTouchMove: false,
        grabCursor: false,
        cubeEffect: {
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
        }
    });

    swiper.sliderMove = function (s, e) {
        console.log(s);
    };

    function Navigate(indx) {
        for (let i of document.querySelectorAll(".Links li")) {
            i.classList.remove("activeLink");
        }
        Array.from(document.querySelectorAll(".Links li"))[indx].classList.add("activeLink");
        swiper.slideTo(indx, 1500, true);
    };

    swiper.on('slideChange', function () {
        swiper.sliderMove(swiper.activeIndex);
    });
    
    const links = Array.from(document.querySelectorAll(".Links li"));

function Navigate(indx) {
    links.forEach(link => link.classList.remove("activeLink"));
    links[indx].classList.add("activeLink");
    swiper.slideTo(indx, 1500, true);
}

        
    