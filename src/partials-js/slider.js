import Glide from '@glidejs/glide';
import axios from 'axios';
import errorUrl from '../images/oh-no.jpg';
import { requestGet } from '../partials-js/requestGet';
import { MAIN_PART_URL, TRENDS_REQUEST_PART, API_KEY } from './vars';

async function slider() {
  const response = await axios.get(
    `${MAIN_PART_URL}${TRENDS_REQUEST_PART}${API_KEY}`
  );
  console.log(response);
}

slider();
