import { getFilms } from './partials-js/getTrendFilms';
import './partials-js/themeSwitch';

document.addEventListener('DOMContentLoaded', getFilms());

export function makerender(arr) {
  console.log(arr);
}
