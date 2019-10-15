import * as Users from '../constants/users';

export function usersReducer(state = {users: [], is_users_fetching: false, auth_user: [], authorization: false}, action) {
    switch (action.type)
    {
        case Users.FETCH_USERS_PENDING: {
            state = {...state, is_users_fetching: true};
            break;
        }

        case Users.FETCH_USERS_FULFILLED: {
            state = {...state, is_users_fetching: false, users: action.payload.data};
            break;
        }

        case Users.FETCH_USERS_REJECTED: {
            state = {...state, is_users_fetching: false, error_message: action.payload.message};
            break;
        }

        case Users.ADD_USER: {
            let users = [...state.users];
            users.push(action.payload);
            state = {...state, users: users};
            break;
        }

        case Users.AUTHORISE_USER: {
            state = {...state, auth_user: action.payload, authorization: true};
            break;
        }
    }

    return state;
}





