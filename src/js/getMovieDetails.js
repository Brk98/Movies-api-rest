import{URL_IMAGE, api} from './apiAxios.js';
import { nodes } from './nodes.js';

export async function getMovieDetail(id){

    nodes.list_movies_title.textContent='Upcoming';
    const {data: movie} = await api(`movie/${id}`);
    console.log(movie);
    nodes.movie_title.textContent = movie.title;
    nodes.movie_description.textContent = movie.overview;
    nodes.movie_poster_degrated.style = `background-image: url(https://image.tmdb.org/t/p/w500${movie.poster_path})`;
    const movieImg = document.createElement('img');
    movieImg.setAttribute('src',`https://image.tmdb.org/t/p/w500${movie.poster_path}`);
    nodes.movie_poster.innerHTML = "";
    nodes.movie_poster.appendChild(movieImg);

}