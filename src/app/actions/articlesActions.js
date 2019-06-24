import data from '../data/articles'

export function fetchArticles() {
    return {
        type: 'FETCH_ARTICLES',
        payload: data
    }
}