import * as Comments from '../constants/comments';

export function commentsReducer(state = {comments: [], is_fetching: false}, action) {
    switch (action.type)
    {
        case Comments.FETCH_COMMENTS_PENDING: {
            state = {...state, is_fetching: true};
            break;
        }

        case Comments.FETCH_COMMENTS_FULFILLED: {
            state = {...state, is_fetching: false, comments: action.payload.data};
            break;
        }

        case Comments.FETCH_COMMENTS_REJECTED: {
            state = {...state, is_fetching: false, error_message: action.payload.message};
            break;
        }
    }

    return state;
}





