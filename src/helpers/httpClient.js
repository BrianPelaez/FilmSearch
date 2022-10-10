const BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY = "&api_key=66ce09b3434852f5b37d4de4bb6667d1";

export function api(endpoint, options = '') {
  return fetch(BASE_URL + endpoint + API_KEY + options +'&language=es-ES').then((res) =>
    res.json()
  );
}
