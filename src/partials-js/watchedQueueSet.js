import {
    API_KEY,
    MAIN_PART_URL,
    MOVIE_BY_ID_PART,
    MOBILE_STUB,
    TABLET_STUB,
    DESKTOP_STUB,
    BASE_IMG_URL,
    DESKTOP_SIZES,
    TABLET_SIZES,
    MOBILE_SIZES
} from './vars';
import { requestGet } from './requestGet';
import { Notify } from 'notiflix';

const refs = {
    movieList: document.querySelector('.movie__collection'),
    watchedBtn: document.querySelector('input[value="Watched"]'),
    queueBtn: document.querySelector('input[value="Queue"]'),
}

// --------- Тимчасово-----------//

// const arrOfId = ['76600', '550', '12', '1038779'];
// const arrOfIdwatched = ['640146','653851', '674324', '615777'];
// localStorage.setItem("queue", JSON.stringify(arrOfId));
// localStorage.setItem("watched", JSON.stringify(arrOfIdwatched));

//------------------------------//

document.addEventListener('DOMContentLoaded', onWatchedBtnClick);
refs.queueBtn.addEventListener('click', onQueueBtnClick);
refs.watchedBtn.addEventListener('click', onWatchedBtnClick);

export async function onQueueBtnClick() {
    refs.queueBtn.removeEventListener('click', onQueueBtnClick);
    refs.movieList.innerHTML = '';

    const arrOfQueueId = JSON.parse(localStorage.getItem("queue"));
    if (arrOfQueueId === null || arrOfQueueId.length === 0) {
        Notify.info("You don't have any movies in the queue yet");
        refs.watchedBtn.addEventListener('click', onWatchedBtnClick);
        return;
    }

    // function checkStorage(key) {
    //     const arrOfId = JSON.parse(localStorage.getItem(key));
    //     if (arrOfId === null || arrOfId.length === 0) {
    //         console.log('Фільмів нема');
    //         refs.watchedBtn.addEventListener('click', onWatchedBtnClick);
    //         return;
    //     }
    //     return arrOfId;
    // }

    const arrPromisesCards = arrOfQueueId.map(async (el) => {
        const response = await requestGet(MAIN_PART_URL, MOVIE_BY_ID_PART, el, API_KEY);
        const objDataMovie = await response.data;
        // console.log(objDataMovie);
        const genresString = objDataMovie.genres.map(el => el.name).join(', ');
        // console.log(genresString);
        const card = makeCard(objDataMovie, genresString);
        return card;
    });

    const arrOfCards = await Promise.all(arrPromisesCards);
    refs.movieList.insertAdjacentHTML('beforeend', arrOfCards.join(''));
    refs.watchedBtn.addEventListener('click', onWatchedBtnClick);
}

export async function onWatchedBtnClick() {
    refs.watchedBtn.removeEventListener('click', onWatchedBtnClick);
    refs.movieList.innerHTML = '';

    const arrOfWatchedId = JSON.parse(localStorage.getItem("watched"));
    if (arrOfWatchedId === null || arrOfWatchedId.length === 0) {
        Notify.info('You have no watched movies yet');
        refs.queueBtn.addEventListener('click', onQueueBtnClick);
        return;
    }

    const arrPromisesCards = arrOfWatchedId.map(async (el) => {
        const response = await requestGet(MAIN_PART_URL, MOVIE_BY_ID_PART, el, API_KEY);
        const objDataMovie = await response.data;
        const genresString = objDataMovie.genres.map(el => el.name).join(', ');
        const card = makeCard(objDataMovie, genresString);
        return card;
    });
    const arrOfCards = await Promise.all(arrPromisesCards);
    refs.movieList.insertAdjacentHTML('beforeend', arrOfCards.join(''));
    refs.queueBtn.addEventListener('click', onQueueBtnClick);
}

function noPhoto(base_url, width, img_file, stub) {
    let strM = '';
    img_file === null ? (strM = stub) : (strM = `${base_url}${width}${img_file}`);
    return strM;
}

function makeCard(obj, genrStr) {
    return `
        <li class="movie__card">
            <div class="movie__img__box">
                <picture class="film-list__img">
                    <source
                        srcset="${noPhoto(
                        BASE_IMG_URL,
                        DESKTOP_SIZES,
                        obj.poster_path,
                        DESKTOP_STUB
                      )}"
                        media="screen and (min-width:1200px)"
                    />
                    <source
                        srcset="${noPhoto(
                        BASE_IMG_URL,
                        TABLET_SIZES,
                        obj.poster_path,
                        TABLET_STUB
                      )}"
                        media="(min-width:768px)"
                    />
                    <source
                        srcset="${noPhoto(
                        BASE_IMG_URL,
                        MOBILE_SIZES,
                        obj.poster_path,
                        MOBILE_STUB
                      )}"
                        media="(max-width:767px)"
                    />
                    <img
                        class="movie__img"
                        src="./images/no-Film-Img.jpg"
                        alt="${obj.original_title}"
                        width="450"
                        height="294"
                        name="Poster"
                        data-id="${obj.id}"
                    />
                </picture>           
            </div>
            <div class="movie__card__textbox">
                <h3 class="movie__title">${obj.original_title}</h3>
                <span class="movie__details">${genrStr} | </span>
                <span class="movie__details">${obj.release_date.slice(0, 4)}</span>
            </div>
        </li>`;
}