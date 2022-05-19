import{URL_IMAGE, api} from './apiAxios.js';
export async function getCatergoriesNames(){
    const {data} = await api('genre/movie/list');
    const categories = data.genres;
    const categoryContainer = document.querySelector('.categories-container');
    categories.forEach(category => {
        const buttonCategory = document.createElement('button');
        buttonCategory.type = 'button';
        buttonCategory.classList.add('categories-button');
        buttonCategory.setAttribute('id',category.id);
        const categoryTitleText = document.createTextNode(category.name);

        buttonCategory.appendChild(categoryTitleText);
        categoryContainer.appendChild(buttonCategory);
    });
}