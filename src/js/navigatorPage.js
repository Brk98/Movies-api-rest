import { navigator } from "./navigation.js";
import {nodes} from "./nodes.js";
import {getCatergoriesNames} from "./getCategories.js"
import { getMovieDetail } from './getMovieDetails.js';

window.addEventListener('DOMContentLoaded', navigatorPage, false);
window.addEventListener('hashchange', navigatorPage, false);

nodes.btn_return.addEventListener('click',function(){
    history.back();
})


function navigatorPage(){
    if(location.hash.startsWith('#trends')){
        trendsPage();
    }else if(location.hash.startsWith('#search=')){
        searchPage();
        const [_, searchData] = location.hash.split('=');
        
    }else if(location.hash.startsWith('#movie=')){
        hideSearchSection();
        moviePage();

    }else if(location.hash.startsWith('#category=')){
        const [_, categoryData] = location.hash.split('=');
        const [categoryId, categoryName] = categoryData.split('-');
        getCatergoriesNames(Number(categoryId));

        const [__, nameCategory] = location.hash.split('-');
        const [categoryN1, categoryN2 = ""] = nameCategory.split('%20');
        nodes.list_movies_title.textContent= `${categoryN1} ${categoryN2}`;
        categoryPage();
    }else{
        homePage();
    }
    document.body.scrollTop = 0;
    document.documentElement.scrollTo = 0;
}

function trendsPage(){
    console.log('Trends page');
}
function homePage(){
    navigator.showMainPage();
    hideSearchSection();
}
function searchPage(){
    navigator.showSearchPage();
}
function moviePage(){
    const [_, movieId] = location.hash.split('=');
    getMovieDetail(movieId);
    navigator.shoeMoviePage();
}
function categoryPage(){
    navigator.showCategoryPage();
}
function hideSearchSection(){
    nodes.searchbox.classList.add('disabled');
    nodes.searchbox_btn.classList.add('disabled');
    nodes.searchbox_btn_cancel.classList.add('disabled');

    nodes.search.classList.remove('hideUp');
    nodes.search.classList.remove('showDonwnSearch');

}
export const pages = {
    'moviePage' : moviePage,
    'categoryPage' : categoryPage,
}

