import{URL_IMAGE, api} from './apiAxios.js';
import { nodes } from './nodes.js';
export async function getCatergoriesNames(){
    const {data} = await api('genre/movie/list');
    const categories = data.genres;
    nodes.categories_container.innerHTML = "";
    categories.forEach(category => {
        const buttonCategory = document.createElement('button');
        buttonCategory.type = 'button';
        buttonCategory.classList.add('categories-button');
        buttonCategory.setAttribute('id',category.id);
        const categoryTitleText = document.createTextNode(category.name);

        buttonCategory.appendChild(categoryTitleText);
        nodes.categories_container.appendChild(buttonCategory);
    });
}