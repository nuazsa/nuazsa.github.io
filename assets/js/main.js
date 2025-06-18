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
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 30,
    stretch: 20,
    depth: 150,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1.2,
    },
    768: {
      slidesPerView: "auto",
    },
  }
});

const birthDate = new Date("2003-11-02");
const today = new Date();

let age = today.getFullYear() - birthDate.getFullYear();
const hasBirthdayPassed = (
today.getMonth() > birthDate.getMonth() ||
(today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate())
);

if (!hasBirthdayPassed) {
age--;
}

const paragraph = document.getElementById("intro");
paragraph.innerHTML = `I'm Azis, a ${age}-year-old Full-stack developer & Backend Engineer. Currently pursuing a major in
    Informatics Engineering at the University of Bina Sarana Informatika. With a passion for creating
    and improving code, I focus on software development.`;


const currentYear = new Date().getFullYear();
document.getElementById("footer").innerHTML = `© ${currentYear} Nur Azis Saputra. All Rights Reserved.`;