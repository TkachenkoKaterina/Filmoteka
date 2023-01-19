import Glide from '@glidejs/glide';
import axios from 'axios';
import errorUrl from '../images/oh-no.jpg';
import { requestGet } from './requestGet';
import { getOneMovieData } from './openModal';
import { onOpenModal } from './openModal';
import { onCloseModal } from './openModal';
import { onBackdropClick } from './openModal';
import { onEsc } from './openModal';
import { renderFilmOnModal } from './openModal';

import {
  MAIN_PART_URL,
  TRENDS_REQUEST_PART,
  API_KEY,
  BASE_IMG_URL,
  MOBILE_SIZES,
  TABLET_SIZES,
} from './vars';

const sliderContainer = document.querySelector('.js-slider-container');

const refs = {
  sliderCollection: document.querySelector('.slider-collection'),
  closeModalBtn: document.querySelector('.modal__close-btn'),
  backdrop: document.querySelector('.js-backdrop'),
};

refs.sliderCollection.addEventListener('click', onImgClick);
refs.closeModalBtn.addEventListener('click', onCloseModal);
refs.backdrop.addEventListener('click', onBackdropClick);

sliderFetch();

function sliderFetch() {
  requestGet(MAIN_PART_URL, TRENDS_REQUEST_PART, API_KEY).then(res => {
    const arr = res.data.results;
    console.log(arr);
    sliderRender(arr);
    new Glide('.glide', {
      type: 'slider',
      startAt: 0,
      perView: 5,
      autoplay: 2000,
      hoverpause: true,
      keyboard: true,
      bound: true,
      Breakpoints: {
        768: { perView: 3 },
      },
    }).mount();
  });
}

function sliderRender(arr) {
  // console.log(arr);
  const markup = arr
    .map(({ poster_path, id }) => {
      return `
          <li class="glide__slide">
            <img class="glide__img" src="${BASE_IMG_URL}${MOBILE_SIZES}${poster_path}" alt="" data-id="${id}"/>
          </li>
          `;
    })
    .join('');
  // console.log(markup);
  // console.log(sliderContainer);
  sliderContainer.insertAdjacentHTML('beforeend', markup);

  const sliderCardRef = document.querySelector('.glide__img');
  console.log(sliderCardRef);
}

function onImgClick(evt) {
  if (evt.target.nodeName !== 'IMG') {
    return;
  }
  onOpenModal(evt);
}
