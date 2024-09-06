const slides = document.querySelectorAll(".slide");

let slideIndex = 0;
let intervalId = null;

startSlide();

function startSlide() {
    slides[slideIndex].classList.add("displaySlide");
    intervalId = setInterval(nextSlide, 5000);
}

function showSlide(index) {

    if (index >= slides.length ) {
        slideIndex = 0;
    }

    if (index < 0) {
        slideIndex = slides.length - 1;
    }

    slides.forEach((item) => {
        item.classList.remove("displaySlide");
    })

    slides[slideIndex].classList.add("displaySlide");

    document.querySelectorAll(".dot").forEach((dot) => {
        dot.classList.remove("dot-clicked");
    })
    document.querySelectorAll(".dot")[slideIndex].classList.add("dot-clicked");
}

 function prevSlide() {
    clearInterval(intervalId);
    slideIndex--;
    showSlide(slideIndex);
 }

 function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
 }

 //dots
 const dots = document.querySelector("#dots");

 for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    dots.append(dot);

    dot.addEventListener("click", () => {
        clearInterval(intervalId);
        slideIndex = i;
        showSlide(i);
        document.querySelectorAll(".dot").forEach((dot) => {
            dot.classList.remove("dot-clicked");
        })
        dot.classList.add("dot-clicked");
    })
 }
