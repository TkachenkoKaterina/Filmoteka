import Glide from '@glidejs/glide';
import axios from 'axios';
// new Glide('.glide').mount();

// import filmsCardSliderTpl from '../templates/card-films-slider.hbs';
// import trailer from './trailers.js';
// import { makerender } from './makeRenderFilms';
import { requestGet } from './requestGet';

import {
  MAIN_PART_URL,
  API_KEY,
  DESKTOP_SIZES,
  TABLET_SIZES,
  MOBILE_SIZES,
  BASE_IMG_URL,
  GENRE_REQUEST_PART,
  TRENDS_REQUEST_PART,
  PATH_TRENDS,
  SEARCH_MOVIE,
  POSTER_SIZES,
} from './vars';

// const containerRef = document.querySelector('.container__slider');

const sliderUlRef = document.querySelector('.glide__slides');
// console.log(sliderUlRef);

const BtnRef = document.querySelector('.glide__arrow');
// console.log(BtnRef);

BtnRef.addEventListener('click', () => {
  requestGet()
    .then(data => renderSlider(data))
    .catch(error => console.log(error));
});

// async function fetchForSlider() {
//   const { response } = await requestGet(
//     MAIN_PART_URL,
//     TRENDS_REQUEST_PART,
//     API_KEY
//   );
//   console.log(response);
//   console.log(response.data);

//   return response.data;
// }

function renderSlider(data) {
  const markup = data
    .map(results => {
      return `
          <li class="glide__slide"></li>
        <li class="glide__slide"></li>
        <li class="glide__slide"></li>
        <li class="glide__slide"></li>
        <li class="glide__slide"></li>
        <li class="glide__slide"></li>
        <li class="glide__slide"></li>
        <li class="glide__slide"></li>
        <li class="glide__slide"></li>
        <li class="glide__slide"></li>
        <li class="glide__slide"></li>
        <li class="glide__slide"></li>
        <li class="glide__slide"></li>
        <li class="glide__slide"></li>
        <li class="glide__slide"></li>
        <li class="glide__slide"></li>
        <li class="glide__slide"></li>
        <li class="glide__slide"></li>
        <li class="glide__slide"></li>
        <li class="glide__slide"></li>
      `;
    })
    .join('');
  sliderUlRef.innerHTML = markup;
}

const glide = new Glide('.glide', {
  type: 'slider',
  startAt: 0,
  perView: 8,
  autoplay: 2000,
  hoverpause: true,
  bound: true,
});

glide.mount();

// async function sliderRender() {
//   try {
//     console.log(BASE_IMG_URL);
//     const response = await axios.get(BASE_IMG_URL);
//     const arr = response.data.results;
//     console.log(arr);
//     // const rusults = response.json();
//     // console.log(rusults);
//     makerender(arr);
//   } catch (error) {
//     console.log(error);
//   }
//   return sliderUlRef.insertAdjacentHTML('beforeend', sliderUlRef);
// }

// function makerender(articles) {
//   sliderUlRef.innerHTML = filmsCardSliderTpl(articles);
//   trailer.createTrailerLink(document.querySelectorAll('.btn-youtube-slider'));
// }

//   sliderUlRef.innerHTML = `<img class="catch-error-pagination" src="${errorUrl}" />`;
