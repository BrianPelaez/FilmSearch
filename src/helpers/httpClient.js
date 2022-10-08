const BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY = "&api_key=66ce09b3434852f5b37d4de4bb6667d1";

export function api(endpoint) {
  return fetch(BASE_URL + endpoint + "&language=es-ES" + API_KEY).then((res) =>
    res.json()
  );
}
