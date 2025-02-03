let index = 0;
const slides = document.querySelectorAll('.slide');

function moveSlide(step) {
    slides[index].classList.remove('active');
    index = (index + step + slides.length) % slides.length;
    slides[index].classList.add('active');
}

document.querySelector('.next').addEventListener('click', () => moveSlide(1));
document.querySelector('.prev').addEventListener('click', () => moveSlide(-1));

setInterval(() => moveSlide(1), 5000);






