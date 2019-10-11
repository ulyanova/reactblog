import axios from 'axios';

export function fetchComments(postId) {
    return {
        type: 'FETCH_COMMENTS',
        payload: axios.get('http://localhost:8082/api/comments/postId/' + postId)
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

export function changeHeight(height) {
    return {
        type: 'CHANGE_HEIGHT',
        payload: height
    }
}

export function changeVisible() {
    return {
        type: 'CHANGE_VISIBLE'
    }
}

export function deleteReply(data) {
    return {
        type: 'DELETE_REPLY',
        payload: data
    }
}