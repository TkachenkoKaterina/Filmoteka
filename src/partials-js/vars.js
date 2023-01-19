//_____________________REQUESTS_MAIN________________________

export const MAIN_PART_URL = 'https://api.themoviedb.org/3/';
export const API_KEY = '?api_key=c861fc623ae12b9b041c6dade1c99e57';

//_____________________REQUESTS_IMAGES________________________
export const BASE_IMG_URL = 'https://image.tmdb.org/t/p/';

export const DESKTOP_SIZES = 'w1280';
export const TABLET_SIZES = 'w780';
export const MOBILE_SIZES = 'w300';

export const POSTER_SIZES = 'w500';

export const DESKTOP_STUB = './images/no-Film-Img.jpg';
export const TABLET_STUB = './images/no-Film-Img336x455.jpg';
export const MOBILE_STUB = './images/no-Film-Img280x402.jpg';

//_____________________REQUESTS_PATHES________________________

export const GENRE_REQUEST_PART = 'genre/movie/list';
export const TRENDS_REQUEST_PART = 'trending/movie/week';
export const SEARCH_MOVIE = 'search/movie';
export const MOVIE_BY_ID_PART = 'movie/';

//_____________________REQUESTS_PARAMETERS________________________
export const ADULT = '&include_adult=false';
//_____________________ARRAY_GENRES________________________
export const ALL_GENRES = [
  { id: 28, name: 'Action' },
  { id: 12, name: 'Adventure' },
  { id: 16, name: 'Animation' },
  { id: 35, name: 'Comedy' },
  { id: 80, name: 'Crime' },
  { id: 99, name: 'Documentary' },
  { id: 18, name: 'Drama' },
  { id: 10751, name: 'Family' },
  { id: 14, name: 'Fantasy' },
  { id: 36, name: 'History' },
  { id: 27, name: 'Horror' },
  { id: 10402, name: 'Music' },
  { id: 9648, name: 'Mystery' },
  { id: 10749, name: 'Romance' },
  { id: 878, name: 'Science Fiction' },
  { id: 10770, name: 'TV Movie' },
  { id: 53, name: 'Thriller' },
  { id: 10752, name: 'War' },
  { id: 37, name: 'Western' },
];
//_____________________KEY_localStorage_____________________
export const GENRES_ARR_KEY = 'GET GENRES ARR';
