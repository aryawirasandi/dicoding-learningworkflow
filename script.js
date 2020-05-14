import "./article-lists.js";
import articles from './articles.js';

const articleListElement = document.createElement("article-list");

articleListElement.articles = articles;

document.body.appendChild(articleListElement);