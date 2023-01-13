import { API_KEY } from './vars';

//import './css/styles.css';

var debounce = require('lodash.debounce');
import Notiflix from 'notiflix';

import axiosPhilm from './axiosPhilm.js';
import axiosAllGenres from './axiosAllGenres';
let allGenres = [];

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

const inputEl = document.querySelector('.header__search-input');
//const spanEl = document.querySelector('#search-form span');
const buttonEl = document.querySelector('.header__search-button');
const divEl = document.querySelector('#gallery');
//const bodyEl = document.querySelector('body');

const formEl = document.querySelector('#search-form');
console.log(formEl);
//buttonEl.classList.add('disabled');
//bodyEl.classList.add('body_class');
let valuesString = '';

const DEBOUNCE_DELAY = 300;
let namberPer_page = 40;
let namberPage = 1;
//let dataTotal = 0;
let datatotalHits = 0;
let pageTotal = 0;

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
  <a class="gallery__item" href="http://image.tmdb.org/t/p/original${backdrop_path}">
  <img class="gallery__image" src="http://image.tmdb.org/t/p/original${poster_path}" alt="${original_title}" title="${title}" width="360" height="294"loading="lazy" />
 </a>
  <div class="info">
    <p class="info-item">
            <span> ${original_title} </span>
    </p>
    <p class="info-item">
      
      <span>${searchGenres(Object.values(genre_ids), genre_ids.length)}</span>
    </p>
    <p class="info-item">
      
      <span>${release_date.slice(0, 4)}</span>
    </p>
    
  </div>
  
</div> `;
      }
    )
    .join('');
};
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

const onInput = event => {
  event.preventDefault();

  console.log(event.target.value.length);
  const valuelongth = event.target.value.length;
  valuesString = event.target.value;
  let element = '';
  for (let index = 0; index < valuelongth; index++) {
    element = element + ' ';
  }
  //console.log(event.target.value === element);

  if (valuesString === element) return (valuesString = '');
  else {
    // console.log(valuesString);
    // buttonEl.classList.remove('disabled');
    // buttonEl.textContent = 'Search';
    valuesString = valuesString.trim();
    // console.log(valuesString);
    namberPage = 1;
    // console.log(namberPage);
    // return valuesString;
  }
};

inputEl.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY));
//inputEl.addEventListener('input', onInput);

const searchPhilm = async event => {
  try {
    event.preventDefault();
    //console.log(event.currentTarget.elements[0]);

    //const {
    //  elements: { searchQuery },
    //} = event.currentTarget;
    if (valuesString === '') {
      return alert(
        '"Sorry, there are no films matching your search query. Please try again."'
      );
    }

    // console.log(valuesString);
    const res = await axiosPhilm(
      API_KEY,
      valuesString,
      namberPage,
      namberPer_page
    );
    //res =>
    //{
    console.log(res);
    const articls = res.data.results;
    console.log(articls);
    //dataTotal = res.data.total_results;
    //console.log(dataTotal);
    datatotalHits = res.data.total_results;
    console.log(datatotalHits);
    // if (dataTotal > datatotalHits) {
    //   pageTotal = Math.ceil(datatotalHits / namberPer_page);
    // } else {
    //   pageTotal = Math.ceil(dataTotal / namberPer_page);
    // }
    pageTotal = res.data.total_pages;
    console.log(pageTotal);
    if (datatotalHits === 0) {
      divEl.innerHTML = '';
      Notiflix.Notify.failure(
        'Sorry, there are no films matching your search query. Please try again.'
      );
      //if (articls.status === 404) {
      //  divEl.innerHTML = '';
      //  Notiflix.Notify.failure(
      //    '"Sorry, there are no images matching your search query. Please try again."'
      //  );
      return;
    } else {
      //if (namberPage === 1) {
      //  spanEl.classList.add('input_box');
      //  buttonEl.classList.add('btn_class');
      //  inputEl.classList.add('input_class');
      //divEl.innerHTML = '';
      //  Notiflix.Notify.info(`Hooray! We found ${datatotalHits} films.`);
      divEl.innerHTML = articleElement(articls);
      // } else {
      // const divAddEl = document.querySelector('.photo-card');
      //divEl.insertAdjacentHTML('beforeend', articleElement(articls));
      // }
      if (pageTotal === namberPage) {
        //buttonEl.classList.add('disabled');
        //spanEl.classList.remove('input_box');
        // buttonEl.classList.remove('btn_class');
        //inputEl.classList.remove('input_class');
        // buttonEl.textContent = 'submit';
        //buttonEl.textContent = 'Search';
        Notiflix.Notify.info(
          "We're sorry, but you've reached the end of search results."
        );
      } else {
        //buttonEl.textContent = 'next page ?';
        let resM = pageTotal - namberPage;
        Notiflix.Notify.info(`You can also view ${resM} pages`);
        namberPage = namberPage + 1;
        // console.log(namberPage);
      }
    }
  } catch (error) {
    console.log(error.message);
    // spanEl.classList.remove('input_box');
    // inputEl.classList.remove('input_class');
    // buttonEl.classList.remove('btn_class');
    divEl.innerHTML = '';
  }
};

formEl.addEventListener('submit', searchPhilm);
