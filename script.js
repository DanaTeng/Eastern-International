// ---- Mobile Menu ----
var navLinks = document.getElementById("navLinks");

function showMenu() {
    navLinks.classList.add("open");
    document.body.style.overflow = "hidden";
}
function hideMenu() {
    navLinks.classList.remove("open");
    document.body.style.overflow = "";
}

// Close menu on nav link click
document.querySelectorAll(".nav-item").forEach(function(link) {
    link.addEventListener("click", hideMenu);
});

// ---- Scroll Reveal ----
var reveals = document.querySelectorAll(
    ".program-card, .campus-card, .facility-card, .testimonial-card, .about-text, .about-visual, .stat-item"
);

reveals.forEach(function(el) {
    el.classList.add("reveal");
});

function onScroll() {
    var windowH = window.innerHeight;
    reveals.forEach(function(el) {
        var rect = el.getBoundingClientRect();
        if (rect.top < windowH - 60) {
            el.classList.add("visible");
        }
    });
}

window.addEventListener("scroll", onScroll, { passive: true });
onScroll(); // run once on load

// ---- Sticky nav shadow on scroll ----
var navbar = document.getElementById("navbar");
window.addEventListener("scroll", function() {
    if (window.scrollY > 10) {
        navbar.style.boxShadow = "0 4px 20px rgba(0,0,0,0.10)";
    } else {
        navbar.style.boxShadow = "0 2px 12px rgba(0,0,0,0.07)";
    }
}, { passive: true });
