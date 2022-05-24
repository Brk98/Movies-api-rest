/*Add the logic of the UX*/
import{getTopMovies} from './getTopMovies.js';
import { getCatergoriesNames } from './getCategories.js';
import{getUpcomingMoviesObject} from './getUpcomingMovies.js';
import {nodes} from './nodes.js'

async function showMainPage(){
    location.hash = "Home_page";
    //Remove all the event listeners
    hideMoviePage();
    nodes.search.classList.remove('disabled');
    nodes.main_title.classList.remove('disabled');
    nodes.search_container.classList.remove('disabled');
    nodes.categories.classList.remove('disabled');
    nodes.top_movies.classList.remove('disabled');
    nodes.list_movies.classList.remove('disabled');
    nodes.header.classList.remove('disabled');
    /*Clousere para el lazy loading de Upcoming Movies*/
    let closureUpcoming = function(){};
    new Promise(function(resolve){
        resolve(getUpcomingMoviesObject.getUpcomingMovies());
    }).then(function(results){
        document.querySelector('.new-movies-btn').remove();
        const closureUpcoming = getUpcomingMoviesObject.closureUpcomingMovies();
        closureUpcoming();
        const btnSeeMore = document.createElement('button');
        btnSeeMore.setAttribute('type','button');
        btnSeeMore.textContent="See more";
        btnSeeMore.classList.add('new-movies-btn');
        btnSeeMore.addEventListener('click',function(){closureUpcoming();});
        nodes.list_movies.appendChild(btnSeeMore);
    })
    /*Onclick Upcoming Movies*/
    getTopMovies();
    getCatergoriesNames();
}

function showMoviePage(){
    nodes.main_title.classList.add('disabled');
    nodes.search_container.classList.add('disabled');
    nodes.categories.classList.add('disabled');
    nodes.top_movies.classList.add('disabled');
    nodes.list_movies.classList.add('disabled');
    nodes.header.classList.add('disabled');
    nodes.search.classList.add('disabled');
    //show section
    nodes.btn_return.classList.remove('disabled');
    nodes.movie_viewer.classList.remove('disabled');
    nodes.movie_background.classList.remove('disabled');
    nodes.movie_description_title.classList.remove('disabled');
    nodes.movie_description.classList.remove('disabled');
}
function hideMoviePage(){
    nodes.btn_return.classList.add('disabled');
    nodes.movie_viewer.classList.add('disabled');
    nodes.movie_background.classList.add('disabled');
    nodes.movie_description_title.classList.add('disabled');
    nodes.movie_description.classList.add('disabled');
}









export const navigator ={
    'showMainPage': showMainPage,
    'shoeMoviePage': showMoviePage,
}

