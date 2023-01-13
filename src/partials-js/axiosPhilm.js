import axios from 'axios';
export default function axiosPhoto(api_key, name, namberPage, namberPer_page) {
  return axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${name}&page=${namberPage}&year&language=en-US&include_adult=false`
  );
}
