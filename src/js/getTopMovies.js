import{URL_IMAGE, api} from './apiAxios.js';

export async function getTopMovies(){
    const {data} = await api('trending/movie/day');
    const movies = data.results.slice(0,10);
    const topMoviesContainer = document.querySelector('#topMoviesContainer');
    movies.forEach(movie => {
        const containerMovie = document.createElement('div');
        containerMovie.classList.add('swiper-slide');
        containerMovie.style.backgroundImage = `url(${URL_IMAGE}${movie.poster_path})`;
        topMoviesContainer.appendChild(containerMovie);
    });
    /*Swiper libreria para el efecto */ 
    var swiper = new Swiper(".mySwiper", {
        effect: "cards",
        grabCursor: true,
        loop: true
      });
}