import axios from 'axios';
export async function requestGet(base_url, path, key, ...parameters) {
  let requestURL = `${base_url}${path}${key}${parameters.join('')}`;
  const response = await axios.get(requestURL);
  return response;
}
