import { API_KEY } from './vars';

//import './css/styles.css';

var debounce = require('lodash.debounce');
import Notiflix from 'notiflix';

import axiosFilm from './axiosFilm.js';
import axiosAllGenres from './axiosAllGenres';
let allGenres = [];

const formEl = document.querySelector('#search-form');
const inputEl = document.querySelector('.header__search-input');
const buttonEl = document.querySelector('.header__search-button');
const pEl = document.querySelector('.header__error-text');
//const pVisualEl = document.querySelector('#visually-hidden');
const divEl = document.querySelector('#gallery');
//const spanEl = document.querySelector('#search-form span');

//console.log(pVisualEl);
buttonEl.classList.add('disebl_button_form');
//pEl.textContent = ' ';

let valuesString = '';
const DEBOUNCE_DELAY = 300;
let namberPer_page = 40;
let namberPage = 1;
let datatotalHits = 0;
let pageTotal = 0;
//-----------------------------------------------------------------------------------------------------------------------------------------
axiosAllGenres(API_KEY)
  .then(res => res)
  .then(resl => resl.data)
  .then(resalts => {
    allGenres = resalts.genres;
    //  console.log(rersalts.genres);
  })
  .catch(err => {
    console.log(err);
  });
//-----------------------------------------------------------------------------------------------------------------------------------------
function searchGenres(arrays, lengthArr) {
  //  console.log(arrays);
  //  console.log(lengthArr);
  let strRes = '';
  if (lengthArr === 0) return 'n/a';
  else {
    arrays.forEach(array => {
      // console.log(array);
      // console.log(allGenres);
      allGenres.map(allGenre => {
        if (array === allGenre.id) {
          strRes += allGenre.name + '  ';
        } else {
          strRes += '';
        }
      });
    });
  }
  return strRes;
}
//----------------------------------------------------------------------------------------------------------------------------
const articleElement = articls => {
  return articls
    .map(
      ({
        id,
        original_language,
        original_title,
        overview,
        poster_path,
        popularity,
        backdrop_path,
        release_date,
        title,
        vote_average,
        vote_count,
        genre_ids,
      }) => {
        return `
         
    <div class="philm-card">
  <a class="gallery__item" href="">
  <img class="gallery__image" src="https://image.tmdb.org/t/p/original${poster_path}" alt="${original_title}" title="${title}" width="360" height="294"loading="lazy" />
 </a>
  <div class="info">
    <p class="info-item">
            <span class="info-item-text"> ${original_title} </span>
    </p>
    <p class="info-item">
      
      <span class="info-item-text">${searchGenres(
        Object.values(genre_ids),
        genre_ids.length
      )}</span>
    </p>
    <p class="info-item">
      
      <span class="info-item-text">${release_date.slice(0, 4)}</span>
    </p>
    
  </div>
  
</div> `;
      }
    )
    .join('');
};

//------------------------------------------------------------------------------------------------------------------------------------------------------------
const onInput = event => {
  event.preventDefault();
  pEl.classList.add('header__error-text--hidden');
  //console.log(event.target.value.length);
  const valuelongth = event.target.value.length;
  valuesString = event.target.value;
  let element = '';
  for (let index = 0; index < valuelongth; index++) {
    element = element + ' ';
  }
  if (valuesString === element) return (valuesString = '');
  else {
    buttonEl.classList.remove('disebl_button_form');
    valuesString = valuesString.trim();
    namberPage = 1;
  }
};

inputEl.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY));

//------------------------------------------------------------------------------------------------------------------------------------
const searchFilm = async event => {
  try {
    event.preventDefault();

    // pVisualEl.classList.remove('visually-hidden');
    if (valuesString === '') {
      return alert(
        '"Sorry, there are no films matching your search query. Please try again."'
      );
    }

    // pVisualEl.classList.remove('visually-hidden');
    const res = await axiosFilm(
      API_KEY,
      valuesString,
      namberPage,
      namberPer_page
    );
    ///onsole.log(res);
    const articls = res.data.results;
    console.log(articls);
    datatotalHits = res.data.total_results;
    // console.log(datatotalHits);
    pageTotal = res.data.total_pages;
    //console.log(pageTotal);
    if (datatotalHits === 0) {
      // divEl.innerHTML = '';
      //pVisualEl.classList.add('visually-hidden');
      // pEl.textContent =        'Search result not successful. Enter the correct movie name.';
      pEl.classList.remove('header__error-text--hidden');
      Notiflix.Notify.failure(
        'Search result not successful. Enter the correct movie name.'
      );
      //if (articls.status === 404) {
      //  divEl.innerHTML = '';
      //  Notiflix.Notify.failure(
      //    '"Sorry, there are no images matching your search query. Please try again."'
      //  );
      return;
    } else {
      //pVisualEl.classList.add('visually-hidden');
      divEl.innerHTML = articleElement(articls);
      if (pageTotal === namberPage) {
        buttonEl.classList.add('disebl_button_form');
        // pVisualEl.classList.add('visually-hidden');

        Notiflix.Notify.info(
          "We're sorry, but you've reached the end of search results."
        );
      } else {
        //buttonEl.textContent = 'next page ?';
        //pVisualEl.classList.add('visually-hidden');
        let resM = pageTotal - namberPage;
        Notiflix.Notify.info(`You can also view ${resM} pages`);
        namberPage = namberPage + 1;
      }
    }
  } catch (error) {
    console.log(error.message);

    // inputEl.classList.remove('input_class');
    // buttonEl.classList.remove('btn_class');
    divEl.innerHTML = '';
  }
};

formEl.addEventListener('submit', searchFilm);
