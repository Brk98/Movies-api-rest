import{URL_IMAGE, api} from './apiAxios.js';
// Obtener las upcoming movies y hacerlo de manera parcial
 const moviesList = [];
const loadMoreUpcomingMovies = document.querySelector('.new-movies-btn');


async function getUpcomingMovies(){
    const {data} = await api('movie/upcoming');
    const upcomingMovies = data.results;
    moviesList.push(...upcomingMovies);
}
function closureUpcomingMovies(){
    let counterMovies = moviesList.length;
    return{
        printUpcomingMovies: ()=>{
            let defaultIndex = 6;
            const upcomingMoviesContainer = document.querySelector('.new-movies');
            if(counterMovies<5){
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
                    upcomingMoviesContainer.appendChild(movieContainer);
                    
                }
                moviesList.splice(0,6);
            }else{
                loadMoreUpcomingMovies.textContent='No more...';
            }
            
        }
    }
}


export const getUpcomingMoviesObject = {
    closureUpcomingMovies: closureUpcomingMovies,
    getUpcomingMovies: getUpcomingMovies,
    loadMoreUpcomingMovies,
}