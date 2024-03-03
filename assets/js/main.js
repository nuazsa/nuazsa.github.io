const icon = document.getElementById("icon");

icon.onclick = function () {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
        icon.className = "fa-regular fa-sun";
    } else {
        icon.className = "fa-regular fa-moon";
    }
};

// Ambil elemen toggle dan ul
const toggle = document.getElementById("navbar-toggle");
const menuList = document.getElementById("menu-list");

toggle.addEventListener("click", () => {
    menuList.classList.toggle("hidden");
});


timeline(document.querySelectorAll('.timeline'), {
    mode: 'horizontal',
    visibleItems: 4,
    forceVerticalMode: 800
});


var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },
});