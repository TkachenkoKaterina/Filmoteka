//import { API_KEY } from './vars';
import { API_KEY, MAIN_PART_URL, BASE_IMG_URL, GENRE_REQUEST_PART, MOBILE_STUB, TABLET_STUB, DESKTOP_STUB, MOBILE_SIZES, TABLET_SIZES, DESKTOP_SIZES } from './vars';
//import './css/styles.css';
import { requestGet } from './requestGet';
var debounce = require('lodash.debounce');
import Notiflix from 'notiflix';

import axiosFilm from './axiosFilm.js';
import axiosAllGenres from './axiosAllGenres';
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

//'w300', 'w780', 'w1280', 'original';
//-------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------------------------
//async () => {
//event.preventDefault();
//  try {
//    const result = await axiosAllGenres(API_KEY, MAIN_PART_URL);
//    allGenres = result.data.genres;
//  } catch (err) {
//   console.log(err);
// }
//};
//--------------------------------------------------------------------------------------------------
//s;
//console.log(s);
// https://api.themoviedb.org/3/genre/movie/list?api_key=c861fc623ae12b9b041c6dade1c99e57&language=en-US
requestGet(MAIN_PART_URL, GENRE_REQUEST_PART, API_KEY)
    .then(res => res)
    .then(resl => resl.data)
    .then(resalts => {
        allGenres = resalts.genres;
    })
    .catch(err => {
        console.log(err);
    });
// axiosAllGenres(API_KEY, MAIN_PART_URL)
//     .then(res => res)
//     .then(resl => resl.data)
//     .then(resalts => {
//         allGenres = resalts.genres;
//     })
//     .catch(err => {
//         console.log(err);
//     });
//-----------------------------------------------------------------------------------------------------------------------------------------
function searchGenres(arrays, lengthArr) {
    let count = lengthArr;
    //.console.log(lengthArr);
    if (lengthArr > 3) {
        lengthArr = 3;
    }
    let strRes = '';
    if (lengthArr === 0) {
        return 'n/a';
    } else {
        // arrays.forEach(array =>
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

//---------------------------------------------------------------------------------------------------------------------------
// function notFotoMob(stringURL, BASE_IMG_URL) {
//     let strM = '';
//     console.log(stringURL === null);
//     if (stringURL === null) {
//         strM = `./images/no-Film-Img280x402.jpg`;
//         console.log(strM);
//         return strM;
//     } else {
//         strM = `${BASE_IMG_URL}w300${stringURL}`;
//         return strM;
//     }
// }
// //-----------------------------------------------------------------------------------------------------------------------------
// function notFotoTab(stringURL, BASE_IMG_URL) {
//     let strT = '';
//     console.log(stringURL === null);
//     if (stringURL === null) {
//         strT = `./images/no-Film-Img336x455.jpg`;
//         console.log(strT);
//         return strT;
//     } else {
//         strT = `${BASE_IMG_URL}w780${stringURL}`;
//         return strT;
//     }
// }
// //----------------------------------------------------------------------------------------------------------------------------
// function notFotoDesktop(stringURL, BASE_IMG_URL) {
//     let strD = '';
//     console.log(stringURL === null);
//     if (stringURL === null) {
//         strD = `./images/no-Film-Img.jpg`;
//         console.log(strD);
//         return strD;
//     } else {
//         strD = `${BASE_IMG_URL}w1280${stringURL}`;
//         return strD;
//     }
// }

//----------------------------------------------------------------------------------------------------------------------------
export const articleElement = articls => {
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
                return `<li class="movie__card">
        <a class="movie__link open__modal--js link"  data-id="${id}" href="#">
          <div class="movie__img__box">
          <picture class="film-list__img">
                    <source
                      srcset="${noFoto(BASE_IMG_URL,DESKTOP_SIZES,poster_path,DESKTOP_STUB)}"
                      media="screen and (min-width:1280px)"
                    />
                    <source
                      srcset="${noFoto(BASE_IMG_URL,LAPTOP_SIZES,poster_path,TABLET_STUB)}"
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
            <span class="movie__details">${searchGenres}(
              Object.values(genre_ids),
              genre_ids.length
            ) </span>
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
        console.log(valuesString);
        namberPage = 1;
    }
};

inputEl.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY));

//------------------------------------------------------------------------------------------------------------------------------------
const searchFilm = async event => {
    try {
        event.preventDefault();
        console.log(valuesString === '');
        if (valuesString === '') {
            return alert(
                'Sorry, there are no films matching your search query. Please try again.'
            );
        }
        // spanEl.classList.add('visually-hidden');
        const res = await axiosFilm(
            API_KEY,
            MAIN_PART_URL,
            valuesString,
            namberPage,
            namberPer_page
        );
        const articls = res.data.results;
        console.log(res);
        console.log(articls);
        datatotalHits = res.data.total_results;
        pageTotal = res.data.total_pages;

        if (datatotalHits === 0) {
            //spanEl.classList.add('visually-hidden');
            divEl.classList.remove('header__error-text--disable');
            Notiflix.Notify.failure(
                'Search result not successful. Enter the correct movie name.'
            );

            return;
        } else {
            ulEl.innerHTML = articleElement(articls);
            if (pageTotal === namberPage) {
                //buttonEl.classList.add('disabled');
                //spanEl.classList.remove('input_box');
                // buttonEl.classList.remove('btn_class');
                //inputEl.classList.remove('input_class');
                // buttonEl.textContent = 'submit';
                //buttonEl.textContent = 'Search';
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
        //ulEl.innerHTML = '';
    }
};

formEl.addEventListener('submit', searchFilm);