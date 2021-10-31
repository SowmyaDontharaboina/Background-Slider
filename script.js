const body = document.body;
const slides = document.querySelectorAll('.slide');
const left = document.getElementById('left');
const right = document.getElementById('right');

let activeslide = 0;

const setBgToBody = () => {
    body.style.backgroundImage = slides[activeslide].style.backgroundImage;
}

const setActiveSlide = () => {
    [...slides].forEach((slide) => {
        slide.classList.remove('active');
    });

    slides[activeslide].classList.add('active');
}

const IncreActiveSlide = () => {
    if(activeslide === slides.length-1) {
        activeslide = 0;
    }
    activeslide++;
    setBgToBody();
    setActiveSlide();

};
const decreActiveSlide = () => {
    if(activeslide === 0) {
        activeslide = slides.length-1;
    }
    activeslide--;
    setBgToBody();
    setActiveSlide();
};
left.addEventListener('click', decreActiveSlide);
right.addEventListener('click', IncreActiveSlide)
setBgToBody();