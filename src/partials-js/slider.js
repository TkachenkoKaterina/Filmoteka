import Glide from '@glidejs/glide';
import axios from 'axios';
import errorUrl from '../images/oh-no.jpg';
import { requestGet } from './requestGet';
import { MAIN_PART_URL, TRENDS_REQUEST_PART, API_KEY } from './vars';

function sliderFetch() {
  requestGet(MAIN_PART_URL, TRENDS_REQUEST_PART, API_KEY).then(res => {
    const arr = res.data;
    console.log(arr);
  });
}
sliderFetch();
