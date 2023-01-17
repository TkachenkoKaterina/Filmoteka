import axios from 'axios';
export default function axiosAllGenres(API_KEY, MAIN_PART_URL, GENRE_REQUEST_PART) {
  return axios.get(`${MAIN_PART_URL}${GENRE_REQUEST_PART}${API_KEY}`);
}
