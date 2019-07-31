import axios from 'axios';

export function fetchArticles() {
    return {
        type: 'FETCH_ARTICLES',
        payload: axios.get('http://localhost:8082/api/posts')
    }
}