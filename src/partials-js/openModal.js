import { MAIN_PART_URL, MOVIE_BY_ID_PART, API_KEY } from './vars';
import { id } from './makeRenderFilms';
import { requestGet } from './requestGet';
import axios from 'axios';
import { BasicLightBox } from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import { workWithButton } from './addToWatch';

import {
  TRENDS_REQUEST_PART,
  BASE_IMG_URL,
  MOBILE_SIZES,
  TABLET_SIZES,
} from './vars';

// const response = requestGet(MAIN_PART_URL, MOVIE_BY_ID_PART, id, API_KEY);
// const objData = response.data;

const refs = {
  cardCollection: document.querySelector('.movie__collection'),
  closeModalBtn: document.querySelector('.modal__close-btn'),
  backdrop: document.querySelector('.js-backdrop'),
};

refs.cardCollection.addEventListener('click', onImgClick);
refs.closeModalBtn.addEventListener('click', onCloseModal);
refs.backdrop.addEventListener('click', onBackdropClick);

function onImgClick(evt) {
  if (evt.target.nodeName !== 'IMG') {
    return;
  }
  onOpenModal(evt);
}

// Fetch movie by id
export async function getOneMovieData(mov_id) {
  // const url = `https://api.themoviedb.org/3/movie/${mov_id}${API_KEY}`;
  // return fetch(url)
  const response = await requestGet(
    MAIN_PART_URL,
    MOVIE_BY_ID_PART,
    mov_id,
    API_KEY
  );
//   console.log(response.data);
//   console.log(mov_id);
  const obj = response.data;
    const genresString = obj.genres.map(el => el.name).join(', ');
    renderFilmOnModal(obj, genresString);
    workWithButton(mov_id);
}

export async function onOpenModal(evt) {
  document.body.classList.add('show-modal');
    window.addEventListener('keydown', onEsc);
  const data = await getOneMovieData(evt.target.dataset.id);
//   console.log(data);

  // renderFilmOnModal

  // if (evt.target.nodeName !== 'IMG') {
  //     evt.preventDefault();
  //     console.log(5);
  //     return;
  // }
  // const markup = modalFilmData(data);
  //     const modal = BasicLightBox.create(markup);

  //     modal.show();
}

export function onCloseModal() {
  document.body.classList.remove('show-modal');
}
export function onBackdropClick(e) {
  if (e.currentTarget === e.target) {
    onCloseModal();
  }
}

// export function onEsc(evt) {
//   if (evt.code === 'Escape') {
//     onCloseModal();
//   }
// }

function onEsc(evt) {
  if (evt.code === 'Escape') {
      onCloseModal();
      window.removeEventListener('keydown', onEsc);
  }
}

export function renderFilmOnModal(
  {
    id,
    title,
    vote_average,
    vote_count,
    popularity,
    original_title,
    overview,
    poster_path,
  },
  str
) {
  refs.backdrop.innerHTML = '';
  const markupModal = `
    <div class="modal no-scroll">
<button type="button" class="modal__close-btn" data-action="close-modal">
<svg class="modal__icon" width="20" height="20">
<use href="./images/icons/icons.svg#icon-close"></use>
</svg>
</button>

<div class="modal__content">

          <img
          class="modal-img"
          src="${BASE_IMG_URL}${MOBILE_SIZES}${poster_path}"
          alt="${title}"
          data-id="${id}"
          width="240"
          height="357"/>


<div class="modal__group">
<h2 class="modal__title">${title}</h2>
<div class="modal__list-container">
  <ul class="modal__list">
    <li class="visually-hidden movieID">${id}</li>
    <li class="modal__item">Vote / Votes</li>
    <li class="modal__item">Popularity</li>
    <li class="modal__item">Origin Title</li>
    <li class="modal__item">Genre</li>
  </ul>
  <ul class="modal__list">
    <li class="modal__item-list modal__list-span-group">
    <span id="vote">${vote_average.toFixed(1)}</span>
    <span class="modal__item-list-span">/</span>
    <span id="votes">${vote_count.toFixed(1)}</span>
    </li>
    <li class="modal__item-list" id="popularity">${popularity.toFixed(1)}</li>
    <li class="modal__item-list" id="origin-title">${original_title}</li>
    <li class="modal__item-list" id="genre">${str}</li>
  </ul>
</div>
<h3 class="modal__subtitle">ABOUT</h3>
<p class="modal__text">${overview}</p>
<div class="btn-container">
  <button class="modal__btn" id="btn-watched" type="button" data-id="${id}">ADD TO WATCHED</button>
  <button class="modal__btn" id="btn-queue" type="button">ADD TO QUEUE</button>
</div>
</div>
</div>
</div>
`;

  refs.backdrop.insertAdjacentHTML('beforeend', markupModal);
}

// function onGetData() {
//     let objFilms;
//     requestGet(TRENDS_REQUEST_PART, API_KEY)
//     .then((res) => {

//         objFilms = res.data.results;
//         getOneMovieData(objFilms);
//     })
// }
