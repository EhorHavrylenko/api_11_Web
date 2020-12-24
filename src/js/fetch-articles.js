function fetchArticles(inputValue){
    const apiKey = '10ba43b094bc4d9a8943de2e77fe6a9a'; // ключ доступа к бекенду
    const url = `https://newsapi.org/v2/everything?q=${inputValue}&language=en` // адрес бекенда

    const options = {
        headers: {
            Authorization: apiKey
        },
    }

    fetch(url, options) 
       .then(response => response.json()) //  применяем джейсон для того чтобы распарсить пришедший контент
       .then(data => data.articles)
       .catch(error => console.log(error))
}

export default fetchArticles