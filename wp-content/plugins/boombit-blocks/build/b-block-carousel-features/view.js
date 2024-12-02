/******/ (() => { // webpackBootstrap
/*!***********************************************!*\
  !*** ./src/b-block-carousel-features/view.js ***!
  \***********************************************/
/**
 * Use this file for JavaScript code that you want to run in the front-end
 * on posts/pages that contain this block.
 *
 * When this file is defined as the value of the `viewScript` property
 * in `block.json` it will be enqueued on the front end of the site.
 *
 * Example:
 *
 * ```js
 * {
 *   "viewScript": "file:./view.js"
 * }
 * ```
 *
 * If you're not making any changes to this file because your project doesn't need any
 * JavaScript running in the front-end, then you should delete this file and remove
 * the `viewScript` property from `block.json`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#view-script
 */

/* eslint-disable no-console */
console.log('Hello World! (from create-block-boombit-blocks block)');
/* eslint-enable no-console */

document.addEventListener('DOMContentLoaded', () => {
  const slider = document.querySelector('.boombit-block-carousel-features-content');
  const slides = document.querySelectorAll('.boombit-block-carousel-features-item');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');
  const dotsContainer = document.querySelector('.thedots');
  let currentIndex = 0;
  let isMoving = false;

  // Copiar el primer y último slide para efecto infinito
  const firstClone = slides[0].cloneNode(true);
  const lastClone = slides[slides.length - 1].cloneNode(true);
  slider.appendChild(firstClone);
  slider.insertBefore(lastClone, slides[0]);
  const allSlides = document.querySelectorAll('.boombit-block-carousel-features-item');
  const slideCount = allSlides.length;
  slider.style.transform = `translateX(0%)`; // Posición inicial

  // Crear dots dinámicamente
  slides.forEach((_, index) => {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    if (index === 0) dot.classList.add('active');
    dot.dataset.index = index;
    dotsContainer.appendChild(dot);
    console.log(dotsContainer);
  });
  dotsContainer.removeChild(dotsContainer.lastElementChild);
  const dots = document.querySelectorAll('.dot');
  function updateDots() {
    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === currentIndex);
    });
  }
  function moveSlider() {
    slider.style.transition = 'transform 0.5s ease-in-out';
    slider.style.transform = `translateX(-${(currentIndex + 1) * 50}%)`;
  }
  function handleNext() {
    if (isMoving) return;
    isMoving = true;
    currentIndex++;
    moveSlider();
    setTimeout(() => {
      if (currentIndex >= slides.length - 1) {
        slider.style.transition = 'none';
        currentIndex = 0;
        slider.style.transform = `translateX(0%)`;
      }
      updateDots();
      isMoving = false;
    }, 500);
  }
  function handlePrev() {
    if (isMoving) return;
    isMoving = true;
    currentIndex--;
    moveSlider();
    setTimeout(() => {
      if (currentIndex < 0) {
        slider.style.transition = 'none';
        currentIndex = slides.length - 1 - 1;
        slider.style.transform = `translateX(-${slideCount - 2}00%)`;
      }
      updateDots();
      isMoving = false;
    }, 500);
  }
  function goToSlide(index) {
    if (isMoving) return;
    currentIndex = index;
    moveSlider();
    updateDots();
  }
  nextBtn.addEventListener('click', handleNext);
  prevBtn.addEventListener('click', handlePrev);
  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      goToSlide(Number(dot.dataset.index));
    });
  });

  // (Opcional) Desliza automáticamente cada 5 segundos
  setInterval(handleNext, 5000);
});
/******/ })()
;
//# sourceMappingURL=view.js.map