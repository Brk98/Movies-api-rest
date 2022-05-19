import { API_KEY } from "./secret.js";

export const URL_IMAGE = 'https://image.tmdb.org/t/p/w300';

export const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers:{
        'Content-Type': 'application/json;charset=utf-8',
    },
    params: {
        'api_key': API_KEY,
    },
});

export default{URL_IMAGE, api};