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