import axios from 'axios';
export default function axiosPhoto(api_key) {
  return axios.get(
    `http://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}`
  );
}
