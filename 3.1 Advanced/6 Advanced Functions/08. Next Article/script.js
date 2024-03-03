function getArticleGenerator(articles) {

    let contentRef = document.getElementById("content");
    let articleCounter = 0;
    let article = "";

    return function showNext() {
    
        if (articleCounter < articles.length) {
            article = articles[articleCounter];
            articleCounter++;
            let articleElem = document.createElement("article");
            articleElem.textContent = article;
            contentRef.appendChild(articleElem);
        }
        else return null;
    }
}