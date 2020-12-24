import fetchArticles from './fetch-articles';
import updateArticlesMarkUp from './updateArticles';

const refs = {
    $articlesContainer: document.querySelector('.articles'), // галерея для наших статей
    $searchForm: document.querySelector('.js-search-form')
}

refs.$searchForm.addEventListener('submit', event => {
    event.preventDefault() // предотвращаем поведение юраузера по умолчанию, тобишь перезагрузку страницы после нажатие кнопки сабмит
    
    const form = event.currentTarget; 
    const inputValue = form.elements.query.value; 

    refs.$articlesContainer.innerHTML = ''; // очишаем страницу перед новым запросом
    fetchArticles(inputValue).then(updateArticlesMarkUp)
})



