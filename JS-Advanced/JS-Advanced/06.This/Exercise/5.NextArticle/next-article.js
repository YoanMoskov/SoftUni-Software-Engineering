function getArticleGenerator(articles) {
    let indexer = 0;
    let currArticle = articles;
    function passArticle() {
        if (currArticle[indexer] == null) {
            
        }
        else{
            let article = document.createElement('article');
            article.innerText = currArticle[indexer++];
            document.querySelector('#content').appendChild(article);
        }
    }
    return passArticle;
}