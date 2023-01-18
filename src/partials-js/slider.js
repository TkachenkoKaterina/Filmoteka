import Glide from '@glidejs/glide';
import axios from 'axios';
import errorUrl from '../images/oh-no.jpg';
import { requestGet } from './requestGet';
import {
  MAIN_PART_URL,
  TRENDS_REQUEST_PART,
  API_KEY,
  BASE_IMG_URL,
  MOBILE_SIZES,
} from './vars';

const sliderContainer = document.querySelector('.js-slider-container');

sliderFetch();

function sliderFetch() {
  requestGet(MAIN_PART_URL, TRENDS_REQUEST_PART, API_KEY).then(res => {
    const arr = res.data.results;
    console.log(arr);
    sliderRender(arr);
  });
}

function sliderRender(arr) {
  console.log(arr);
  const markup = arr
    .map(({ poster_path }) => {
      return `
          <li class="glide__slide">
            <img class="glide__img" src="${BASE_IMG_URL}${MOBILE_SIZES}${poster_path}" width="300" alt="" />
          </li>
          `;
    })
    .join('');
  // sliderContainer.innerHTML = markup;
  console.log(markup);
  sliderContainer.insertAdjacentHTML('beforeend', markup);
}
