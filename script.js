// JavaScript for Image Slider
let currentSlide = 0;
const slides = document.querySelectorAll(".slider img");

function showSlide() {
    slides.forEach((slide, index) => {
        slide.style.opacity = index === currentSlide ? "1" : "0";
    });

    currentSlide = (currentSlide + 1) % slides.length;
}

// Change slide every 3 seconds
setInterval(showSlide, 3000);

// Initial slide
showSlide();
