import { getFilms } from './getTrendFilms';
import { FULL_URL_TRENDS } from './vars';
import { makerender } from './makeRenderFilms';

export function onLoadPage (){
let arrFilms;

getFilms(FULL_URL_TRENDS).then((res) => {
    arrFilms = res.data.results;
    console.log(arrFilms);
    makerender(arrFilms);
 
})
}