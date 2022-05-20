

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