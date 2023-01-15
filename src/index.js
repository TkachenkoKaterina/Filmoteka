import { getFilms } from './partials-js/getTrendFilms';
import { POSTER_SIZES, BASE_URL } from './partials-js/vars';

const galleryRef = document.querySelector('#gallery');
document.addEventListener('DOMContentLoaded', getFilms());
export function makerender(arr) {
  console.log(arr);
  arr.forEach(
    ({ backdrop_path, poster_path, original_title, release_date }) => {
      const renderEl = `<li class="movie__card">
            <a class="movie__link open__modal--js" href="">
                <div class="movie__img__box">
                    <img class="movie__img"
                    src='${BASE_URL}${POSTER_SIZES}${poster_path}'
                    alt='${original_title}' 
                    name="Poster"
                     >
                </div>
            </a>
            <div class="movie__card__textbox">
                <a class="movie__link open__modal--js" href="">
                    <h3 class="movie__title">${original_title}</h3>
                    <span class="movie__details">Жанри | </span><span
                    class="movie__details">${release_date.slice(0, 4)}</span>
                
            </a>
            </div>
        </li>
    `;
      galleryRef.insertAdjacentHTML('beforeend', renderEl);
    }
  );
}
