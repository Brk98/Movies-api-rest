import{URL_IMAGE, api} from './apiAxios.js';
import { nodes } from './nodes.js';


export async function getTopMovies(){
    nodes.list_movies_title.textContent='Upcoming';
    const {data} = await api('trending/movie/day');
    const movies = data.results.slice(0,10);
    movies.forEach(movie => {
        const containerMovie = document.createElement('div');
        containerMovie.classList.add('swiper-slide');
        containerMovie.classList.add('swiper-lap');
        containerMovie.addEventListener('click',function(){
            location.hash = 'movie=' + movie.id;
        });
        containerMovie.style.backgroundImage = `url(${URL_IMAGE}${movie.poster_path})`;
        const secontContainerMovie = containerMovie.cloneNode(true);
        secontContainerMovie.addEventListener('click',function(){
            location.hash = 'movie=' + movie.id;
        });
        nodes.top_movies_pc.appendChild(secontContainerMovie);
        nodes.top_movies_container.appendChild(containerMovie);
    });
    /*Swiper libreria para el efecto */ 
    var swiper = new Swiper(".mySwiper", {
        effect: "cards",
        grabCursor: true,
        loop: true
      });

    var swiper2 = new Swiper(".mySwiper2", {
        slidesPerView: 4,
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },
        navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        },
        // pagination: {
        //   el: ".swiper-pagination",
        //   clickable: true,
        // },
      });
}