let currentIndex = 0;
let slides = document.querySelectorAll('.carousel-slide');
let autoPlay = true;
let slideInterval;

function moveSlide(direction) {
  currentIndex += direction;
  if (currentIndex < 0) {
    currentIndex = slides.length - 1;
  }
  if (currentIndex >= slides.length) {
    currentIndex = 0;
  }
  updateCarousel();
}

function goToSlide(index) {
  currentIndex = index;
  updateCarousel();
}

function updateCarousel() {
  let newTransformValue = `translateX(-${currentIndex * 100}%)`;
  document.querySelector('.carousel').style.transform = newTransformValue;
  updateIndicators();
}

function updateIndicators() {
  document.querySelectorAll('.indicator').forEach((indicator, index) => {
    if (index === currentIndex) {
      indicator.classList.add('active');
    } else {
      indicator.classList.remove('active');
    }
  });
}

function toggleAutoPlay() {
  autoPlay = !autoPlay;
  if (autoPlay) {
    slideInterval = setInterval(() => {
      moveSlide(1);
    }, 3000);
    document.querySelector('.pause').innerText = 'Pausar';
  } else {
    clearInterval(slideInterval);
    document.querySelector('.pause').innerText = 'Reanudar';
  }
}

window.onload = () => {
  updateCarousel();
  slideInterval = setInterval(() => {
    if (autoPlay) {
      moveSlide(1);
    }
  }, 3000);
};

