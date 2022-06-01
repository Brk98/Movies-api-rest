import{URL_IMAGE, api} from './apiAxios.js';
import { nodes } from './nodes.js';

export async function getMovieDetail(id){
    nodes.list_movies_title.textContent='Upcoming';
    nodes.movie_poster.innerHTML = "";
    nodes.movie_score.innerHTML = "";
    nodes.movie_title.innerHTML = "";
    nodes.movie_description.innerHTML = "";
    const {data: movie} = await api(`movie/${id}`);
    console.log(movie);
    nodes.movie_title.textContent = movie.title;
    nodes.movie_description.textContent = movie.overview;
    nodes.movie_poster_degrated.style = `background-image: url(https://image.tmdb.org/t/p/w500${movie.poster_path})`;
    const movieImg = document.createElement('img');
    movieImg.setAttribute('src',`https://image.tmdb.org/t/p/w500${movie.poster_path}`);
    nodes.movie_poster.appendChild(movieImg);
    nodes.movie_score_number.textContent = `Score: ${movie.vote_average}`
    getStarts(movie.vote_average);



}

function getStarts(vote){
    const stars = parseInt(vote/2);
    const halfStar = vote - (stars*2);
    for (let index = 1; index <= stars; index++) {
        const star = nodes.movie_score_star.cloneNode(true);
        nodes.movie_score.appendChild(star);
    }
    if(halfStar >= 0.5){
        const halfStar = nodes.movie_score_half_star.cloneNode(true);
        nodes.movie_score.appendChild(halfStar);
    }
}