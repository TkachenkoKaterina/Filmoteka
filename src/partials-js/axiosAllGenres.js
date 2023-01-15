import axios from 'axios';
export default function axiosAllGenres(api_key) {
  return axios.get(`http://api.themoviedb.org/3/genre/movie/list${api_key}`);
}
