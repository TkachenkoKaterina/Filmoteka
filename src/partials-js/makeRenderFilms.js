import {
  MOBILE_SIZES,
  TABLET_SIZES,
  DESKTOP_SIZES,
  BASE_IMG_URL,
} from './vars';

const trendsContainerEL = document.querySelector('.movie__collection');

export function makerender(arr, collectioinGenres) {
  trendsContainerEL.replaceChildren();
  const renderEl = arr
    .map(({ id, original_title, release_date, poster_path, genre_ids }) => {
      let genresInCard = [];
      genre_ids.map(ID =>
        collectioinGenres.forEach(({ id, name }) => {
          if (ID === id) {
            genresInCard.push(name);
          }
        })
      );

      return `<li class="movie__card">
            
          <div class="movie__img__box">
           <picture class="film-list__img">
                <source srcset="${BASE_IMG_URL}${MOBILE_SIZES}${poster_path}"
                    media="screen and (min-width:1200px)"
                  />
                <source srcset="${BASE_IMG_URL}${TABLET_SIZES}${poster_path}"
                    media="(min-width:768px)"
                  />
                <source srcset="${BASE_IMG_URL}${DESKTOP_SIZES}${poster_path}"
                    media="(max-width:767px)"
                  />
                <img
                    class="movie__img"
                    src="./images/no-Film-Img.jpg"
                    alt="${original_title}"
                    data-id="${id}"
                    width="450"
                    height="294"
                    name="Poster"
                  />
            </picture>
          </div>
          <div class="movie__card__textbox">
              <h3 class="movie__title">${original_title}</h3>
                <span class="movie__details">${filterArrGenres(genresInCard)} | 
                </span><span class="movie__details">${release_date.slice(
                  0,
                  4
                )}</span>
            </div>
        </li> `;
    })
    .join('');

  trendsContainerEL.insertAdjacentHTML('beforeend', renderEl);
}

function filterArrGenres(arrGenres) {
  if (arrGenres.length > 3) {
    return `${arrGenres[0]}, ${arrGenres[1]}, Others`
  } else return `${arrGenres[0]}, ${arrGenres[1]}, ${arrGenres[2]}`;
}
