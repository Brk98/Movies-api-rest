/*Add the logic of the UX*/
import{getTopMovies} from './getTopMovies.js';
import { getCatergoriesNames } from './getCategories.js';
import{getUpcomingMoviesObject} from './getUpcomingMovies.js';
import {nodes} from './nodes.js'
import {getMoviesByCategoryObject} from './getMoviesByCategory.js';
import {getMoviesBySearchObject} from './getMoviesSearch.js';

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
function hideMainPage(){
    nodes.main_title.classList.add('disabled');
    nodes.search_container.classList.add('disabled');
    nodes.categories.classList.add('disabled');
    nodes.top_movies.classList.add('disabled');
    nodes.list_movies.classList.add('disabled');
    nodes.header.classList.add('disabled');
    nodes.search.classList.add('disabled');
}
function hideMoviePage(){
    nodes.btn_return.classList.add('disabled');
    nodes.movie_viewer.classList.add('disabled');
    nodes.movie_background.classList.add('disabled');
    nodes.movie_description_title.classList.add('disabled');
    nodes.movie_description.classList.add('disabled');
}

function showCategoryPage(){
    hideMainPage();
    hideMoviePage();
    nodes.categories.classList.remove('disabled');
    nodes.main_title.classList.remove('disabled');
    nodes.search_container.classList.remove('disabled');
    nodes.list_movies.classList.remove('disabled');
    nodes.header.classList.remove('disabled');
    nodes.search.classList.remove('disabled');
    nodes.btn_return.classList.remove('disabled');
    //Get the id from url
    const [_, categoryData] = location.hash.split('=');
    const [categoryId, categoryName] = categoryData.split('-');
       /*Clousere para el lazy loading de Upcoming Movies*/
       let closureUpcomingCategory = function(){};
       new Promise(function(resolve){
           resolve(getMoviesByCategoryObject.getMoviesByCategory(Number(categoryId)));
       }).then(function(results){
           document.querySelector('.new-movies-btn').remove();
           const closureUpcomingCategory = getMoviesByCategoryObject.closureMoviesByCategory();
           closureUpcomingCategory();
           const btnSeeMore = document.createElement('button');
           btnSeeMore.setAttribute('type','button');
           btnSeeMore.textContent="See more";
           btnSeeMore.classList.add('new-movies-btn');
           btnSeeMore.addEventListener('click',function(){closureUpcomingCategory();});
           nodes.list_movies.appendChild(btnSeeMore);
       })
}

function showSearchPage(){
    hideMainPage();
    hideMoviePage()
    nodes.list_movies.classList.remove('disabled');
    nodes.list_movies_title.textContent="";
    nodes.header.classList.remove('disabled');

    nodes.search_container.classList.remove('disabled');
    nodes.searchbox.classList.remove('disabled');
    nodes.searchbox_btn.classList.remove('disabled');
    nodes.searchbox_btn_cancel.classList.add('disabled');

    nodes.btn_return.classList.remove('disabled');

    const [_, searchData] = location.hash.split('=');
    const palabas = searchData.split('%20');
    let query = '';
    if(palabas.length>1){
        query = palabas.join(' ');
    }else{
        query = searchData;
    }
    
    new Promise(function(resolve){
        resolve(getMoviesBySearchObject.getMoviesBySearch(query));
    }).then(function(results){
        document.querySelector('.new-movies-btn').remove();
        const closureUpcomingSearch = getMoviesBySearchObject.closureMoviesBySearch();
        closureUpcomingSearch();
        const btnSeeMore = document.createElement('button');
        btnSeeMore.setAttribute('type','button');
        btnSeeMore.textContent="See more";
        btnSeeMore.classList.add('new-movies-btn');
        btnSeeMore.addEventListener('click',function(){closureUpcomingSearch();});
        nodes.list_movies.appendChild(btnSeeMore);
    })
}







export const navigator ={
    'showMainPage': showMainPage,
    'shoeMoviePage': showMoviePage,
    'showCategoryPage': showCategoryPage,
    'showSearchPage': showSearchPage,
}

