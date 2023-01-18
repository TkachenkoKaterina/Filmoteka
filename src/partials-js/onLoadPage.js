import { requestGet } from './requestGet';
import { MAIN_PART_URL, TRENDS_REQUEST_PART, API_KEY } from './vars';
import { makerender } from './makeRenderFilms';
import { pagination } from './tuiPagination';
export function onLoadPage() {
    let arrFilms;
    requestGet(MAIN_PART_URL, TRENDS_REQUEST_PART, API_KEY).then((res) => {
        pagination(res.data.total_pages, res.data.page);
        arrFilms = res.data.results;
        makerender(arrFilms);
    })
}