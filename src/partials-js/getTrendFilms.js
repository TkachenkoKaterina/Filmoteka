import { API_KEY, MAIN_PART_URL } from './vars';
import { makerender } from '../index';
import axios from 'axios';
import { pagination } from './tuiPagination';
export async function getFilms() {
  const urlApi = `${MAIN_PART_URL}trending/movie/week${API_KEY}`;

  await axios
    .get(urlApi)
    .then(function (response) {
      if (response.status !== 200) {
        return alert('Sorry, there are no films for you');
      }
      // console.log(response);
      return response.data;
    })
    .then(results => {
      makerender(results.results);
      // console.log(results);
      pagination(results.total_pages, results.page);
    })
    .catch(function (error) {
      console.log(error);
    });
}
