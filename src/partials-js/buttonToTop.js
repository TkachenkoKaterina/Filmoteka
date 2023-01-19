import throttle from 'lodash.throttle';

const btnToTop = document.querySelector('.btnToTop');
window.addEventListener('scroll', throttle(onScroll, 250));

function onScroll() {
  const minPxToScroll = 300;
  if (window.scrollY > minPxToScroll) {
    btnToTop.classList.add(`transitionBtn`);
    btnToTop.classList.remove(`hidden-btnToTop`);
  }
  if (window.scrollY < minPxToScroll) {
    btnToTop.classList.add(`hidden-btnToTop`);
  }
}

export function scrolToTop() {
 window.scrollTo({ top: 0, behavior: 'smooth' });
}

btnToTop.addEventListener('click', scrolToTop); 