import{URL_IMAGE, api} from './apiAxios.js';
import { nodes } from './nodes.js';
import { clickMovie } from '../main.js';

export async function getTopMovies(){
    const {data} = await api('trending/movie/day');
    const movies = data.results.slice(0,10);
    movies.forEach(movie => {
        const containerMovie = document.createElement('div');
        containerMovie.classList.add('swiper-slide');
        containerMovie.setAttribute('id',movie.id);
        // containerMovie.setAttribute('onclick',`clickMovie('${movie.id}')`);
        containerMovie.addEventListener('click',function(){
            clickMovie(movie.id);
        });
        containerMovie.style.backgroundImage = `url(${URL_IMAGE}${movie.poster_path})`;
        nodes.top_movies_container.appendChild(containerMovie);
    });
    /*Swiper libreria para el efecto */ 
    var swiper = new Swiper(".mySwiper", {
        effect: "cards",
        grabCursor: true,
        loop: true
      });
}