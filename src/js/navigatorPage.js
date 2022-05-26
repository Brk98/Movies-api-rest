import { navigator } from "./navigation.js";
import {nodes} from "./nodes.js";

window.addEventListener('DOMContentLoaded', navigatorPage, false);
window.addEventListener('hashchange', navigatorPage, false);

nodes.btn_return.addEventListener('click',function(){
    homePage();
})


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
    document.body.scrollTop = 0;
    document.documentElement.scrollTo = 0;
}

function trendsPage(){
    console.log('Trends page');
}
function homePage(){
    navigator.showMainPage();
}
function searchPage(){
    console.log('Search page');
}
function moviePage(){
    navigator.shoeMoviePage();
}
function categoryPage(){
    navigator.showCategoryPage();
}

export const pages = {
    'moviePage' : moviePage,
    'categoryPage' : categoryPage,
}

