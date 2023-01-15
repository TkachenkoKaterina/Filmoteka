import axios from 'axios';
export default function axiosFilm(API_KEY, MAIN_PART_URL, name, namberPage) {
  return axios.get(
    `${MAIN_PART_URL}search/movie/${API_KEY}&query=${name}&page=${namberPage}&year&language=en-US&include_adult=false`
  );
}
