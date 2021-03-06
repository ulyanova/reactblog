import axios from 'axios';

export function fetchComments(postId) {
    return {
        type: 'FETCH_COMMENTS',
        payload: axios.get('http://localhost:8082/api/comments/postId/' + postId)
    }
}

export function fetchAllComments() {
    return {
        type: 'FETCH_ALL_COMMENTS',
        payload: axios.get('http://localhost:8082/api/comments/')
    }
}

export function addComment(comment) {
    return {
        type: 'ADD_COMMENT',
        payload: comment
    }
}

export function deleteComment(id) {
    return {
        type: 'DELETE_COMMENT',
        payload: id
    }
}

export function addReply(data) {
    return {
        type: 'ADD_REPLY',
        payload: data
    }
}

export function deleteReply(data) {
    return {
        type: 'DELETE_REPLY',
        payload: data
    }
}

export function updateCount(count) {
    return {
        type: 'UPDATE_COUNT',
        payload: count
    }
}