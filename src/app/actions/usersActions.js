import axios from 'axios';

export function fetchUsers() {
    return {
        type: 'FETCH_USERS',
        payload: axios.get('http://localhost:8082/api/users')
    }
}

export function addUser(user) {
    return {
        type: 'ADD_USER',
        payload: user
    }
}

export function authoriseUser(user) {
    return {
        type: 'AUTHORISE_USER',
        payload: user
    }
}