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
}

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.swiper-slide'); // Adjust the selector based on your HTML structure

    sections.forEach(section => {
        let startY;
        let endY;

        section.addEventListener('touchstart', (e) => {
            startY = e.touches[0].clientY;
        });

        section.addEventListener('touchmove', (e) => {
            endY = e.touches[0].clientY;
            const deltaY = startY - endY;

            section.scrollBy(0, deltaY);
            startY = endY; // Update startY for continuous scrolling
        });

        // Enable mouse wheel scrolling
        section.addEventListener('wheel', (e) => {
            section.scrollBy(0, e.deltaY);
        });
    });
});
/*     const swiper = new Swiper(".swiper", {
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
} */

        
    document.addEventListener('DOMContentLoaded', function() {
        const contentContainer = document.querySelector('.about-us');
        let page = 1;
    
        function loadMoreContent() {
            // Simulate loading more content
            const newContent = document.createElement('div');
            newContent.style.padding = '20px 0';
            newContent.innerHTML = `
                <iframe src="images/Certificate.pdf" width="100%" height="300px" style="border: none;"></iframe>
            `;
            contentContainer.appendChild(newContent);
        }
    
        contentContainer.addEventListener('scroll', function() {
            if (contentContainer.scrollTop + contentContainer.clientHeight >= contentContainer.scrollHeight) {
                page++;
                loadMoreContent();
            }
        });
    });
    