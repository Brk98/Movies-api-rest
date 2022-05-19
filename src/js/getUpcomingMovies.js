import{URL_IMAGE, api} from './apiAxios.js';
// Obtener las upcoming movies y hacerlo de manera parcial
 const moviesList = [];
async function getUpcomingMovies(){
    const {data} = await api('movie/upcoming');
    const upcomingMovies = data.results;
    moviesList.push(...upcomingMovies);
}
function closureUpcomingMovies(){
    let counterMovies = moviesList.length;
    return{
        printUpcomingMovies: ()=>{
            const upcomingMoviesContainer = document.querySelector('.new-movies');
            for (let index = 0; index <= 5; index++) {
                counterMovies--;
                const movie = moviesList[index];
                const movieContainer = document.createElement('div');
                movieContainer.classList.add('movie');
                const movieImg = document.createElement('img');
                movieImg.setAttribute('src',`${URL_IMAGE}${movie.poster_path}`);
                movieContainer.appendChild(movieImg);
                upcomingMoviesContainer.appendChild(movieContainer);
                
            }
            moviesList.splice(0,6);
        }
    }
}


export const getUpcomingMoviesObject = {
    closureUpcomingMovies: closureUpcomingMovies,
    getUpcomingMovies: getUpcomingMovies,
}