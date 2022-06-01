import { pages } from "./js/navigatorPage.js";
import { nodes } from "./js/nodes.js";


// Global boolean variable that holds the current orientation
var pageInPortraitMode;

// Listen for window resizes to detect orientation changes
window.addEventListener("resize", windowSizeChanged);

// Set the global orientation variable as soon as the page loads
addEventListener("load", function() {
  pageInPortraitMode = window.innerHeight > window.innerWidth;
  document.getElementById("viewport").setAttribute("content", "width=" + window.innerWidth + ", height=" + window.innerHeight + ", initial-scale=1.0, maximum-scale=1.0, user-scalable=0");
})

// Adjust viewport values only if orientation has changed (not on every window resize)
function windowSizeChanged() {
  if (((pageInPortraitMode === true) && (window.innerHeight < window.innerWidth)) || ((pageInPortraitMode === false) && (window.innerHeight > window.innerWidth))) {
    pageInPortraitMode = window.innerHeight > window.innerWidth;
    document.getElementById("viewport").setAttribute("content", "width=" + window.innerWidth + ", height=" + window.innerHeight + ", initial-scale=1.0, maximum-scale=1.0, user-scalable=0");
  }
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
  nodes.searchbox.value = '';
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


nodes.searchbox_btn.addEventListener('click', function(){
    if(!nodes.searchbox.value == ''){
    location.hash = "search=" + nodes.searchbox.value.trim();
    }
});

