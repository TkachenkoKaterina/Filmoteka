import axios from 'axios';
export default function axiosAllGenres(API_KEY, MAIN_PART_URL) {
  return axios.get(`${MAIN_PART_URL}genre/movie/list${API_KEY}`);
}
