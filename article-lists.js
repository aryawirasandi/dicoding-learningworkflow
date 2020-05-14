import "./article-item.js";
class ArticleLists extends HTMLElement {
    set articles(articles){
        this._articles = articles;
        this.render();
    }

    render(){
        this._articles.forEach(article => {
            const articleElement = document.createElement("article-item");
            articleElement.article = article;
            this.append(articleElement);
        })
    }
}

customElements.define("article-list", ArticleLists);