const carouselImages = document.querySelector('.carousel-images');
const images = document.querySelectorAll('.carousel-images img');

let index = 0;

function changeImage() {
    index++;
    if (index >= images.length) {
        index = 0;
    }
    const offset = -index * 100;
    carouselImages.style.transform = `translateX(${offset}%)`;
}

setInterval(changeImage, 3000); // Cambia cada 3 segundos
