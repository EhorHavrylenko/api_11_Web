import articlesTpl from '../templates/articles.hbs';

const refs = {
    $articlesContainer: document.querySelector('.articles'), // галерея для наших статей
}


function updateArticlesMarkUp(articles){
    const markup = articlesTpl(articles); // создаем переменую, которая с помощью импортированого hbs-метода делаем разметку статей
    refs.$articlesContainer.insertAdjacentHTML('beforeend', markup); // добавляем динамечески созданую разметку на страницу
}

export default updateArticlesMarkUp