import axios from 'axios';
import { makerender } from '../index';
import * as vars from './vars';

// const urlApi = `${MAIN_PART_URL}trending/movie/week${API_KEY}`;
// https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>
// https://image.tmdb.org/t/p/w500/8uO0gUM8aNqYLs1OsTBQiXu0fEv.jpg
// https://api.themoviedb.org/3/search/movie?api_key={api_key}&query=Jack+Reacher
let query = '&query=Avatar';
let lang = '&language=en-US';
export async function requestGet(base_url, path, key, ...parameters) {
  let requestURL = `${base_url}${path}${key}${parameters.join('')}`;
  const response = await axios.get(requestURL);
  console.log(response);
  return response;
}
document.addEventListener('DOMContentLoaded', () => {
  requestGet(vars.MAIN_PART_URL, vars.PATH_TRENDS, vars.API_KEY);
  requestGet(
    vars.MAIN_PART_URL,
    vars.SEARCH_MOVIE,
    vars.API_KEY,
    query,
    lang,
    lang
  );
});
