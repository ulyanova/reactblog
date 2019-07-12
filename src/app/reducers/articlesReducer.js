import * as Articles from '../constants/articles';

export function articlesReducer(state = {articles: [], is_fetching: false}, action) {
    console.log('!!!ACTION', action, action.payload);
    switch (action.type)
    {
        case Articles.FETCH_ARTICLES_PENDING: {
            state = {...state, is_fetching: true};
            break;
        }

        case Articles.FETCH_ARTICLES_FULFILLED: {
            state = {...state, is_fetching: false, articles: action.payload.data};
            break;
        }

        case Articles.FETCH_ARTICLES_REJECTED: {
            state = {...state, is_fetching: false, error_message: action.payload.message};
            break;
        }
        default:
            return state;
    }

    //return state;
}