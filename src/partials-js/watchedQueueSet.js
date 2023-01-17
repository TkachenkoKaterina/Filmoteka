import { API_KEY, MAIN_PART_URL, MOVIE_BY_ID_PART, BASE_IMG_URL } from './vars';
import requestGet from './requestGet';

refs = {
    watchedBtn: document.querySelector('input[value="Watched"]'),
    queueBtn: document.querySelector('input[value="Queue"]'),
}
console.log(refs.watchedBtn);