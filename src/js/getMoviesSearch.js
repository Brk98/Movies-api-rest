import{URL_IMAGE, api} from './apiAxios.js';
import { nodes } from './nodes.js';
// Obtener las upcoming movies y hacerlo de manera parcial
const moviesList = [];

async function getMoviesBySearch(query){
    //Reset the Array to avoid data duplication in UI
    moviesList.splice(0,moviesList.length);
    const {data} = await api('search/movie',{
        params: {
            query,
        },
    });
    const upcomingMovies = data.results;
    moviesList.push(...upcomingMovies);
}
function closureMoviesBySearch(){
    let counterMovies = 0;
    nodes.list_movies_container.innerHTML = "";
    nodes.list_movies_btn_see.textContent='See more';

    function printMoviesBySearch(){
            counterMovies = moviesList.length;
            let defaultIndex = 9;
            if(counterMovies<=5){
                defaultIndex = counterMovies
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
                moviesList.splice(0,9);
            }else{
                nodes.list_movies_btn_see.textContent='No more...';
            }
            
        }
        return printMoviesBySearch;
}


export const getMoviesBySearchObject = {
    closureMoviesBySearch: closureMoviesBySearch,
    getMoviesBySearch: getMoviesBySearch,
}