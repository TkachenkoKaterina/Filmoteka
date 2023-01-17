import {
  addWatchedtoLocalStorage,
  addQueuedToLocalStorage,
} from './partials-js/addToWatch';

import { getFilms } from './partials-js/getTrendFilms';
import { POSTER_SIZES, BASE_URL } from './partials-js/vars';
import './partials-js/themeSwitch';

// let arr = [];

// getFilms().then(result => {
//   console.log(result);
//   arr.push(result);
//   console.log(arr);
// });

function createArr() {
  getFilms().then(result => {
    console.log(result);
    const arr = result.data;
    console.log(arr);
  });
}

createArr();

const galleryRef = document.querySelector('#gallery');
document.addEventListener('DOMContentLoaded', getFilms());
export function makerender(arr) {
  return arr
    .map(({ id, backdrop_path, poster_path, original_title, release_date }) => {
      return ` 
            
     <li class="movie__card">
        <a class="movie__link open__modal--js link"  data-id="${id}" href="">
          <div class="movie__img__box">


          <picture class="film-list__img">
                    <source
                      srcset="
                      ${BASE_URL}w1280${poster_path}
                        
                      "
                      media="screen and (min-width:1200px)"
                    />
                    <source
                      srcset="
                      ${BASE_URL}w780${poster_path}
                        
                      "
                      media="(min-width:768px)"
                    />
                    <source
                      srcset="
                      ${BASE_URL}w300${poster_path}
                        
                      "
                      media="(max-width:767px)"
                    />
                    <img
              class="movie__img"
              src="./images/no-Film-Img.jpg"
              alt="${original_title}"
              width="450"
              height="294"
              name="Poster"
            />
                  </picture>           
          </div>
        </a>
        <div class="movie__card__textbox">
          <a class="movie__link open__modal--js link" data-id="${id}" href="">
            <h3 class="movie__title">${original_title}</h3>
            <span class="movie__details">Жанр| </span
            ><span class="movie__details">${release_date.slice(0, 4)}</span>
          </a>
        </div>
      </li> `;
    })
    .join('');

  // console.log(arr);
  // arr.forEach(
  //   ({ backdrop_path, poster_path, original_title, release_date }) => {
  //     const renderEl = `<li class="movie__card">
  //          <a class="movie__link open__modal--js" data-id="${id}" href="">
  //               <div class="movie__img__box">
  //                   <img class="movie__img"
  //                   src='${BASE_URL}${POSTER_SIZES}${poster_path}'
  //                   alt='${original_title}'
  //                   name="Poster"
  //                    >
  //               </div>
  //           </a>
  //           <div class="movie__card__textbox">
  //               <a class="movie__link open__modal--js" href="">
  //                   <h3 class="movie__title">${original_title}</h3>
  //                   <span class="movie__details">Жанри | </span><span
  //                   class="movie__details">${release_date.slice(0, 4)}</span>
  //
  //          </a>
  //          </div>
  //      </li>
  //   `;
  //
  // galleryRef.insertAdjacentHTML('beforeend', renderEl);
  //  }
  //);
}

// addQueuedToLocalStorage();
// addWatchedtoLocalStorage();
