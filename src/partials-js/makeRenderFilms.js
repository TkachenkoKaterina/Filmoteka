import {
    POSTER_SIZES,
    BASE_IMG_URL,
} from './vars';


const trendsContainerEL = document.querySelector('.movie__collection');

export function makerender(arr, collectioinGenres) {
  
  
  const renderEl = arr
  .map(({ original_title, release_date, poster_path, genre_ids }) => {
    
    let genresInCard = [];
    genre_ids.map(ID => collectioinGenres.forEach(({ id, name }) => {
      if (ID === id) {
          genresInCard.push(name)
        }
      }) )
          
          return `<li class="movie__card">
            <a class="movie__link open__modal--js" data-id="" href="">
                <div class="movie__img__box">
                    <img class="movie__img"
                    src="${BASE_IMG_URL}${POSTER_SIZES}${poster_path}"
                    alt="./images/no-Film-Img394x574.jpg"
                    width="395"
                    name="Poster"
                     >
                </div>
            </a>
            <div class="movie__card__textbox">
                <a class="movie__link open__modal--js" data-id="" href="">
                    <h3 class="movie__title">${original_title}</h3>
                    <span class="movie__details">${filterArrGenres(genresInCard)} | </span><span class="movie__details">${release_date.slice(0, 4)}</span>
                
            </a>
            </div>
        </li> `;
        })
        .join('');

    trendsContainerEL.insertAdjacentHTML('beforeend', renderEl);
}


function filterArrGenres(arrGenres) {
  if (arrGenres.length > 3){
    return [arrGenres[0], arrGenres[1], 'others']
  } else 
  return arrGenres
}