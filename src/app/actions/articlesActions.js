import axios from 'axios';

export function fetchArticles(type) {
    return {
        type: 'FETCH_ARTICLES',
        payload: axios.get('http://localhost:8082/api/posts/' + type)
    }
}

export function loadMore(type) {
    return {
        type: 'LOAD_MORE',
        payload: axios.get('http://localhost:8082/api/posts' + type)
    }
}

export function fetchPost(id) {
    return {
        type: 'FETCH_POST',
        payload: axios.get('http://localhost:8082/api/posts/post/' + id)
    }
}