import { requestGet } from './requestGet';
import { MAIN_PART_URL, TRENDS_REQUEST_PART, API_KEY, GENRE_REQUEST_PART } from './vars';
import { makerender } from './makeRenderFilms';



let arrOfGenres
function receiveGenres() {

    requestGet(MAIN_PART_URL, GENRE_REQUEST_PART, API_KEY).then(res => {
        arrOfGenres = res.data.genres
    })
    }
receiveGenres()
  


export function onLoadPage() {
    let arrFilms;
    requestGet(MAIN_PART_URL, TRENDS_REQUEST_PART, API_KEY).then((res) => {

        arrFilms = res.data.results;
        makerender(arrFilms, arrOfGenres);
    })
}