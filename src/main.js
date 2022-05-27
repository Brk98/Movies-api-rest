import { pages } from "./js/navigatorPage.js";
import { nodes } from "./js/nodes.js";


//Assign to each movie the ID and function
export function clickMovie(id){
    pages.moviePage();
}


nodes.search.addEventListener('click', function(){
    //remove default
    nodes.search.classList.remove('showDonwnSearch');
    nodes.search.classList.add('hideUp');
    nodes.searchbox.classList.remove('disabled');
    nodes.searchbox_btn.classList.remove('disabled');
    nodes.searchbox_btn_cancel.classList.remove('disabled');

    nodes.searchbox.classList.add('showDonwn');
    nodes.searchbox_btn.classList.add('showDonwn');
    nodes.searchbox_btn_cancel.classList.add('showDonwn');

});

nodes.searchbox_btn_cancel.addEventListener('click', function(){
    //Remove animation
    nodes.searchbox.classList.remove('showDonwn');
    nodes.searchbox_btn.classList.remove('showDonwn');
    nodes.searchbox_btn_cancel.classList.remove('showDonwn');
    //Add animation
    nodes.searchbox.classList.add('hideUpCancel');
    nodes.searchbox_btn.classList.add('hideUpCancel');
    nodes.searchbox_btn_cancel.classList.add('hideUpCancel'); 
    //Remove animation
    nodes.search.classList.remove('hideUp');
    nodes.search.classList.add('showDonwnSearch');
    
});




