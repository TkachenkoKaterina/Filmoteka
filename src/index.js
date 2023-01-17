import './partials-js/refs';
import './partials-js/vars';
import './partials-js/onLoadPage';
import './partials-js/themeSwitch';
import './partials-js/authorization';
import './partials-js/search-movie-word';
import './partials-js/axiosAllGenres';
import './partials-js/axiosFilm';
import './partials-js/getTrendFilms';
import './partials-js/makeRenderFilms';
import './partials-js/openModal';
import './partials-js/addToWatch';
import './partials-js/tuiPagination';
import './partials-js/footer-modal';
import '../node_modules/basiclightbox/dist/basicLightbox.min.css';

import { onLoadPage } from './partials-js/onLoadPage';

document.addEventListener('DOMContentLoaded', onLoadPage());

// import {

//   addWatchedtoLocalStorage,
//   addQueuedToLocalStorage,
// } from './partials-js/addToWatch';

// addQueuedToLocalStorage();
// addWatchedtoLocalStorage();
