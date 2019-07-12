//import articles from '../data/articlesData';

//import axios from 'axios';

export function fetchArticles(articles) {
    return {
        type: 'FETCH_ARTICLES',
        articles
    }
}