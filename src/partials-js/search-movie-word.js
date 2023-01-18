import { API_KEY, MAIN_PART_URL, BASE_IMG_URL, GENRE_REQUEST_PART, SEARCH_MOVIE, MOBILE_STUB, TABLET_STUB, DESKTOP_STUB, MOBILE_SIZES, TABLET_SIZES, DESKTOP_SIZES, ADULT } from './vars';
import { requestGet } from './requestGet';
var debounce = require('lodash.debounce');
import Notiflix from 'notiflix';

let allGenres = [];

const formEl = document.querySelector('#search-form');
const inputEl = document.querySelector('.header__search-input');
const buttonEl = document.querySelector('.header__search-button');
const divEl = document.querySelector('.header__error-text--disable');
const spanEl = document.querySelector('#visually-hidden');
const ulEl = document.querySelector('.movie__collection');

buttonEl.classList.add('disebl_button_form');

let valuesString = '';
const DEBOUNCE_DELAY = 300;
let namberPer_page = 40;
let namberPage = 1;
let datatotalHits = 0;
let pageTotal = 0;
//__________________________GET GENRES ARR_______________________
requestGet(MAIN_PART_URL, GENRE_REQUEST_PART, API_KEY)
    .then(res => res)
    .then(resl => resl.data)
    .then(resalts => {
        allGenres = resalts.genres;
    })
    .catch(err => {
        console.log(err);
    });

//-----------------------------------------------------------------------------------------------------------------------------------------
function searchGenres(arrays, lengthArr) {
    let count = lengthArr;
    if (lengthArr > 3) {
        lengthArr = 3;
    }
    let strRes = '';
    if (lengthArr === 0) {
        return 'n/a';
    } else {
        for (let index = 0; index < lengthArr; index++) {
            count = count - 1;

            allGenres.map(allGenre => {
                if (arrays[index] === allGenre.id) {
                    if (count === 0) {
                        strRes += allGenre.name;
                    } else {
                        strRes += allGenre.name + ', ';
                    }
                } else {
                    strRes += '';
                }
            });
        }
    }
    return strRes;
}

function noFoto(base_url, width, img_file, stub) {
    let strM = '';
    img_file === null ? strM = stub : strM = `${base_url}${width}${img_file}`;
    return strM;
}

//----------------------------------------------------------------------------------------------------------------------------
const articleElement = articls => {
    return articls
        .map(
            ({
                id,
                original_title,
                poster_path,
                release_date,
                genre_ids,
            }) => {
                return `<li class="movie__card">
        <a class="movie__link open__modal--js link"  data-id="${id}" href="#">
          <div class="movie__img__box">
          <picture class="film-list__img">
                    <source
                      srcset="${noFoto(BASE_IMG_URL,DESKTOP_SIZES,poster_path,DESKTOP_STUB)}"
                      media="screen and (min-width:1280px)"
                    />
                    <source
                      srcset="${noFoto(BASE_IMG_URL,TABLET_SIZES,poster_path,TABLET_STUB)}"
                      media="(min-width:768px)"
                    />
                    <source
                      srcset="${noFoto(BASE_IMG_URL,MOBILE_SIZES,poster_path,MOBILE_STUB)}"
                      media="(max-width:767px)"
                    />
                    <img
              class="movie__img"
              src="./images/no-Film-Img.jpg"
              alt="Постер до фільму"
              width="264"
              height="374"
              name="Poster"
            />
                  </picture>           
          </div>
        </a>
        <div class="movie__card__textbox">
          <a class="movie__link open__modal--js link" data-id="${id}" href="#">
            <h3 class="movie__title">${original_title}</h3>
            <span class="movie__details">"${searchGenres(
              Object.values(genre_ids),
              genre_ids.length
            ) }"</span>
            <span class="movie__details">${release_date.slice(0, 4)}</span>
          </a>
        </div>
      </li> `;
            }
        )
        .join('');
};

//------------------------------------------------------------------------------------------------------------------------------------------------------------
const onInput = event => {
    event.preventDefault();
    divEl.classList.add('header__error-text--disable');
    const valuelongth = event.target.value.length;
    valuesString = event.target.value;
    let element = '';
    for (let index = 0; index < valuelongth; index++) {
        element = element + ' ';
    }
    if (valuesString === element) {
        return (valuesString = '');
    } else {
        buttonEl.classList.remove('disebl_button_form');
        valuesString = valuesString.trim();
        valuesString = `&query=${valuesString}`;
        namberPage = 1;
    }
};

inputEl.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY));

//------------------------------------------------------------------------------------------------------------------------------------
const searchFilm = async event => {
    try {
        event.preventDefault();
        if (valuesString === '') {
            return alert(
                'Sorry, there are no films matching your search query. Please try again.'
            );
        }
        const res = await requestGet(MAIN_PART_URL, SEARCH_MOVIE, API_KEY, ADULT, valuesString);
        const articls = res.data.results;
        datatotalHits = res.data.total_results;
        pageTotal = res.data.total_pages;

        if (datatotalHits === 0) {
            divEl.classList.remove('header__error-text--disable');
            Notiflix.Notify.failure(
                'Search result not successful. Enter the correct movie name.'
            );

            return;
        } else {
            ulEl.innerHTML = articleElement(articls);
            if (pageTotal === namberPage) {
                buttonEl.classList.add('disebl_button_form');
                Notiflix.Notify.info(
                    "We're sorry, but you've reached the end of search results."
                );
            } else {
                let resM = pageTotal - namberPage;
                Notiflix.Notify.info(`You can also view ${resM} pages`);
                namberPage = namberPage + 1;
            }
        }
    } catch (error) {
        console.log(error);
        console.log(error.value);
        console.log(error.message);
    }
};

formEl.addEventListener('submit', searchFilm);