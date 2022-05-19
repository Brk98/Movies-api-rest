import{URL_IMAGE, api} from './js/apiAxios.js';
import{getTopMovies} from './js/getTopMovies.js';
import { getCatergoriesNames } from './js/getCategories.js';
import{getUpcomingMoviesObject} from './js/getUpcomingMovies.js';


/*
Clousere para el lazy loading de Upcoming Movies*/
let closureUpcoming = function(){};
new Promise(function(resolve){
    resolve(getUpcomingMoviesObject.getUpcomingMovies());
}).then(function(results){
    closureUpcoming = getUpcomingMoviesObject.closureUpcomingMovies();
    closureUpcoming.printUpcomingMovies();
})
/*Onclick Upcoming Movies*/
getUpcomingMoviesObject.loadMoreUpcomingMovies.addEventListener('click',function(){closureUpcoming.printUpcomingMovies();});


getCatergoriesNames();
getTopMovies();

