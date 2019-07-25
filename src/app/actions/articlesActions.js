export function fetchArticles(articles) {
    return {
        type: 'FETCH_ARTICLES',
        payload: articles
    }
}