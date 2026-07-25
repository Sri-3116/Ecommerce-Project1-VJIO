// Advertisement
const Closebtn = document.getElementById("closebtn");
const ads = document.getElementById("ads");

Closebtn.addEventListener("click", () => {
    ads.style.display = "none";
});


// Hero Slider
const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currentSlide = 0;

function showSlide(index) {

    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }

    slides.forEach(slide => {
        slide.classList.remove("active");
    });

    slides[currentSlide].classList.add("active");
}

nextBtn.addEventListener("click", () => {
    showSlide(currentSlide + 1);
});

prevBtn.addEventListener("click", () => {
    showSlide(currentSlide - 1);
});


// Like buttons
document.querySelectorAll(".like-button").forEach(btn => {

    btn.addEventListener("click", () => {
        btn.classList.toggle("liked");
    });

});


// Section animation
const sections = [
    document.getElementById("newarrival"),
    document.getElementById("MostWanted")
];

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

});

sections.forEach(section => observer.observe(section));


// Sidebar
const Sidebar = document.querySelector(".side-nav-items");
const Sidebtn = document.getElementById("Menu-btn");
const SideCloseBtn = document.getElementById("MenuClosebtn");

Sidebtn.addEventListener("click", () => {
    Sidebar.style.transform = "translateX(0%)";
});

SideCloseBtn.addEventListener("click", () => {
    Sidebar.style.transform = "translateX(-100%)";
});


// Close sidebar after clicking a link
document.querySelectorAll(".side-nav-items a").forEach(link => {

    link.addEventListener("click", () => {
        Sidebar.style.transform = "translateX(-100%)";
    });

});