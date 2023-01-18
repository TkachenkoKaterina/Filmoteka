import Glide from '@glidejs/glide';
import axios from 'axios';
import errorUrl from '../images/oh-no.jpg';
import { requestGet } from './requestGet';
import { MAIN_PART_URL, TRENDS_REQUEST_PART, API_KEY } from './vars';

const sliderContainer = document.querySelector('.js-slider-container');

sliderFetch();
// sliderRender();

function sliderFetch() {
  requestGet(MAIN_PART_URL, TRENDS_REQUEST_PART, API_KEY).then(res => {
    const arr = res.data.results;
    console.log(arr);
    return arr;
  });
}

function sliderRender(arr) {
  console.log(arr);
  const markup = arr
    .map(({ backdrop_path }) => {
      return `
          <li class="glide__slide">
            <img class="glide__img" src="./images/1.jpg" alt="" />
          </li>
          `;
    })
    .join('');
  sliderContainer.innerHTML = markup;
}
