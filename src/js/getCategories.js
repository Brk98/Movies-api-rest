import{URL_IMAGE, api} from './apiAxios.js';
import { nodes } from './nodes.js';
import { navigator } from './navigation.js';

export async function getCatergoriesNames(id='no-selected'){
    const {data} = await api('genre/movie/list');
    const categories = data.genres;
    nodes.categories_container.innerHTML = "";
    nodes.categories_container.scrollLeft;
    
    if(id === 'no-selected'){
        printCategories(categories);
    }else{
        categorySelected(categories, id);
    }
    

}

function printCategories(categories, id = 'no-selected'){
    categories.forEach(category => {
        const buttonCategory = document.createElement('button');
        buttonCategory.type = 'button';
        buttonCategory.classList.add('categories-button');
        buttonCategory.setAttribute('id',category.id);
        const categoryTitleText = document.createTextNode(category.name);
        buttonCategory.appendChild(categoryTitleText);
        nodes.categories_container.appendChild(buttonCategory);
        //Add evente listener to each category
        buttonCategory.addEventListener('click',function(){
            getCatergoriesNames(category.id);
            location.hash = "#category=" + category.id + "-" + category.name;
            navigator.showCategoryPage();
        });
    });
    if(id != 'no-selected'){
        const selected = nodes.categories_container.firstChild;
        selected.classList.add('button-selected');
    }
}

function categorySelected(array, categoryId){
    const fromIndex = array.map(x => x.id).indexOf(categoryId);
    const toIndex = 0;
    const element = array.splice(fromIndex, 1)[0];
    array.splice(toIndex, 0, element);
    printCategories(array, categoryId);
}

