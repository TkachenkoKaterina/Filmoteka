import {
  addWatchedtoLocalStorage,
  addQueuedToLocalStorage,
} from './partials-js/addToWatch';

import { getFilms } from './partials-js/getTrendFilms';

document.addEventListener('DOMContentLoaded', getFilms());

export function makerender(arr) {
  console.log(arr);
}
// addQueuedToLocalStorage();
// addWatchedtoLocalStorage();
