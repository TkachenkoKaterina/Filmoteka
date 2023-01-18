import { requestGet } from './requestGet';
import {
  MAIN_PART_URL,
  TRENDS_REQUEST_PART,
  API_KEY,
  GENRE_REQUEST_PART,
} from './vars';
import { makerender } from './makeRenderFilms';
import { pagination, changePage } from './tuiPagination';

let arrOfGenres;
function receiveGenres() {
  requestGet(MAIN_PART_URL, GENRE_REQUEST_PART, API_KEY).then(res => {
    arrOfGenres = res.data.genres;
  });
}
receiveGenres();

let arrFilms;
export function onLoadPage() {
  requestGet(MAIN_PART_URL, TRENDS_REQUEST_PART, API_KEY).then(res => {
    arrFilms = res.data.results;
    makerender(res.data.results, arrOfGenres);
    const pagInst = pagination(res.data.total_results, res.data.page);
    pagInst.on('afterMove', function (eventData) {
      changePage(res.request.responseURL, eventData.page).then(res => {
        makerender(res.data.results, arrOfGenres);
      });
    });
  });
}
