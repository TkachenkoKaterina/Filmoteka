import {
  MOBILE_SIZES,
  DESKTOP_SIZES,
  TABLET_SIZES,
  BASE_IMG_URL,
  API_KEY,
} from './vars';

const trendsContainerEL = document.querySelector('.movie__collection');

export function makerender(arr) {
  const renderEl = arr
    .map(({ id, original_title, release_date }) => {
      return `<li class="movie__card">
        <a class="movie__link open__modal--js link"  data-id="${id}" href="">
          <div class="movie__img__box">
           <picture class="film-list__img">
            <source
                srcset="${BASE_IMG_URL}${DESKTOP_SIZES}${API_KEY}"
                media="screen and (min-width:1200px)"
            />
            <source
                srcset="${BASE_IMG_URL}${TABLET_SIZES}${API_KEY}"
                media="(min-width:768px)"
            />
            <source
                srcset="${BASE_IMG_URL}${MOBILE_SIZES}${API_KEY}"
                media="(max-width:767px)"
            />
            <img
              class="movie__img"
              src="./images/no-Film-Img.jpg"
              alt="${original_title}"
              width="394"
              height="574"
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

  trendsContainerEL.insertAdjacentHTML('beforeend', renderEl);
}

// console.log(arr);
// arr.forEach(
//   ({ backdrop_path, poster_path, original_title, release_date }) => {
//     const renderEl = `<li class="movie__card">
//          <a class="movie__link open__modal--js" data-id="${id}" href="">
//               <div class="movie__img__box">
//                   <img class="movie__img"
//                   src='${BASE_IMG_URL}${POSTER_SIZES}${poster_path}'
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

//          </a>
//          </div>
//      </li>
//   `;

// galleryRef.insertAdjacentHTML('beforeend', renderEl);
//  }
// );
