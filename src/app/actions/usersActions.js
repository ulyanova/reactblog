import axios from 'axios';

export function fetchUsers() {
    return {
        type: 'FETCH_USERS',
        payload: axios.get('http://localhost:8082/api/users')
    }
}