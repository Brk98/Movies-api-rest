import{URL_IMAGE, api} from './apiAxios.js';
import { nodes } from './nodes.js';
// Obtener las upcoming movies y hacerlo de manera parcial
const moviesList = [];
const loadMoreUpcomingMovies = document.querySelector('.new-movies-btn');


async function getUpcomingMovies(){
    //Reset the Array to avoid data duplication in UI
    moviesList.splice(0,moviesList.length);
    const {data} = await api('movie/upcoming');
    const upcomingMovies = data.results;
    moviesList.push(...upcomingMovies);
}
function closureUpcomingMovies(){
    let counterMovies = 0;
    nodes.list_movies_container.innerHTML = "";
    nodes.list_movies_btn_see.textContent='See more';

    function printUpcomingMovies(){
            counterMovies = moviesList.length;
            const movieContainerWith = 300;
            let defaultIndex = 0;
            const screenWith = screen.width;
            if(screenWith >= 850){
                const moviesNumber = parseInt(screenWith/movieContainerWith);
                defaultIndex = moviesNumber * 2;
            }
            else{
                defaultIndex = 6;
            }
            if(counterMovies<=5){
                defaultIndex = counterMovies; 
            }
            if(counterMovies > 0){
                for (let index = 1; index <= defaultIndex; index++) {
                    counterMovies--;
                    const movie = moviesList[index-1];
                    const movieContainer = document.createElement('div');
                    movieContainer.classList.add('movie');
                    const movieImg = document.createElement('img');
                    movieImg.setAttribute('src',`${URL_IMAGE}${movie.poster_path}`);
                    movieContainer.appendChild(movieImg);
                    movieContainer.addEventListener('click',function(){
                        location.hash = 'movie=' + movie.id;
                    });
                    nodes.list_movies_container.appendChild(movieContainer);
                    
                }
                moviesList.splice(0,defaultIndex);
            }else{
                nodes.list_movies_btn_see.textContent='No more...';
            }
            
        }
        return printUpcomingMovies;
}


export const getUpcomingMoviesObject = {
    closureUpcomingMovies: closureUpcomingMovies,
    getUpcomingMovies: getUpcomingMovies,
    loadMoreUpcomingMovies,
}