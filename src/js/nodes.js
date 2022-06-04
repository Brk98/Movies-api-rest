/*Nodes for the navigator*/

/*Min selector function */
const $ = (selector)=>document.querySelector(selector);


export const nodes = {
    // desktop or laptop
    top_movies_pc: $('#topMoviesContainer2'),
    //Main page
    header:  $('header'),
    main_title: $('h2.title-categories'),
    search: $('button.header-category-search-container'),
    search_container: $('.header-category-search'),
    searchbox: $('input#search'),
    searchbox_btn: $('button.btn-search'),
    searchbox_btn_cancel: $('.btn-search-cancel'),
    categories: $('section.categories-main-container'),
    categories_container: $('.categories-container'),
    top_movies: $('section.top-movies-container'),
    top_movies_container: $('#topMoviesContainer'),
    list_movies: $('section.new-movies-container'),
    list_movies_container : $('.new-movies'),
    list_movies_title: $('h2.new-movies-title'),
    list_movies_btn_see: $('button.new-movies-btn'),
    see_more_btn: $('.new-movies-btn'),
    //Movie details
    movie_viewer: $('.movie-viewer-mainContainre'),
    movie_background: $('section.container-onclick-movie'),
    movie_poster_degrated: $('.container-movie-degraded'),
    movie_poster: $('.container-degraded'),
    movie_title: $('h2.titleMovie'),
    movie_score: $('div.rankinContainer-starts'),
    movie_score_number: $('.scoreNumber'),
    movie_score_star: $('i.fa-star'),
    movie_score_half_star: $('i.fa-star-half'),
    movie_categories: $('div.containder-categoriesMovies'),
    movie_description_title: $('h3.descriptionMovie'),
    movie_description: $('p.description'),
    btn_return: $('.btn-return'),
    movies_title: $('.new-movies-title'),
};