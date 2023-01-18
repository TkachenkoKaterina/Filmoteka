import Glide from '@glidejs/glide';
import axios from 'axios';
import filmsCardSliderTpl from '../templates/card-film-slider.hbs';
import errorUrl from '../images/oh-no.jpg';
const sliderContainer = document.querySelector('.js-slider-container');
console.log(sliderContainer);
renderTrendy();

const glide = new Glide('.glide', {
  type: 'slider',
  startAt: 0,
  perView: 8,
  autoplay: 2000,
  hoverpause: true,
  bound: true,
});

glide.mount();

function renderTrendy() {
  const url = `https://api.themoviedb.org/3/trending/all/day?api_key=c861fc623ae12b9b041c6dade1c99e57`;
  return fetch(url)
    .then(response => response.json())
    .then(({ results }) => {
      console.log(results);
      return results;
    })
    .then(renderSliderFilms)
    .catch(err => {
      console.log('Ошибочка!');
      sliderContainer.innerHTML = `<img class="catch-error-pagination" src="${errorUrl}" />`;
    });
}

function renderSliderFilms(cards) {
  sliderContainer.innerHTML = filmsCardSliderTpl(cards);
}
