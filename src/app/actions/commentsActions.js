import axios from 'axios';

export function fetchComments(postId) {
    return {
        type: 'FETCH_COMMENTS',
        payload: axios.get('http://localhost:8082/api/comments/postId/' + postId)
    }
}