/*Master*/
import{getTopMovies} from './getTopMovies.js';
import { getCatergoriesNames } from './getCategories.js';
import{getUpcomingMoviesObject} from './getUpcomingMovies.js';

window.addEventListener('DOMContentLoaded', navigatorPage, false);
window.addEventListener('hashchange', navigatorPage, false);

function navigatorPage(){
    if(location.hash.startsWith('#trends')){
        trendsPage();
    }else if(location.hash.startsWith('#search=')){
        searchPage();
    }else if(location.hash.startsWith('#movie=')){
        moviePage();
    }else if(location.hash.startsWith('#category=')){
        categoryPage();
    }else{
        homePage();
    }
}

function trendsPage(){
    console.log('Trends page');
}
function homePage(){
    console.log('Home page');
        /*Clousere para el lazy loading de Upcoming Movies*/
        let closureUpcoming = function(){};
        new Promise(function(resolve){
            resolve(getUpcomingMoviesObject.getUpcomingMovies());
        }).then(function(results){
            closureUpcoming = getUpcomingMoviesObject.closureUpcomingMovies();
            closureUpcoming.printUpcomingMovies();
        })
        /*Onclick Upcoming Movies*/
        getUpcomingMoviesObject.loadMoreUpcomingMovies.addEventListener('click',function(){closureUpcoming.printUpcomingMovies();});
    getTopMovies();
    getCatergoriesNames();
}
function searchPage(){
    console.log('Search page');
}
function moviePage(){
    console.log('Movie page');
}
function categoryPage(){
    console.log('Categories page');
}