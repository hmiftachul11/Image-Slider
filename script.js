// All Images
const slides = document.querySelectorAll(".slide");
var counter = 0;
slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

const goPrev = () => {
  if (counter == 0) {
    counter = slides.length - 1;
    slideImage();
  } else {
    counter--;
    slideImage();
  }
};

const goNext = () => {
  if (counter == slides.length - 1) {
    counter = 0;
    slideImage();
  } else {
    counter++;
    slideImage();
  }
};

const slideImage = () => {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
};

// Autoplay Slider (optional)
let autoplayInterval;

const startAutoplay = () => {
  autoplayInterval = setInterval(goNext, 3000); // Ganti dengan interval yang Anda inginkan (dalam milidetik)
};

const stopAutoplay = () => {
  clearInterval(autoplayInterval);
};

startAutoplay();

// Pause autoplay on hover (optional)
const container = document.querySelector(".container");
container.addEventListener("mouseenter", stopAutoplay);
container.addEventListener("mouseleave", startAutoplay);
