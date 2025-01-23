// Menu Hamburger Toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");
const body = document.body;

// Toggle menu saat hamburger diklik
hamburger.addEventListener("click", (event) => {
    navLinks.classList.toggle("active");
    hamburger.classList.toggle("open");

    // Mencegah klik pada hamburger menutup navbar
    event.stopPropagation();
});

// Menutup menu jika klik di luar navbar
body.addEventListener("click", (event) => {
    if (!navLinks.contains(event.target) && !hamburger.contains(event.target)) {
        navLinks.classList.remove("active");
        hamburger.classList.remove("open");
    }
});
