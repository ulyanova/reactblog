import * as Articles from '../constants/articles';

export function articlesReducer(state = {articles: [], is_fetching: false, loadButton: false}, action) {
    //console.log('!!!ACTION', action, action.payload);
    switch (action.type)
    {
        case Articles.FETCH_ARTICLES_PENDING: {
            state = {...state, is_fetching: true};
            break;
        }

        case Articles.FETCH_ARTICLES_FULFILLED: {
            let data = action.payload.data.slice(-5).reverse();
            let dataLength = action.payload.data.length;
            state = {...state, is_fetching: false, articles: data};

            if(dataLength === state.articles.length) {
                var button = true;
            } else {
                var button = false;
            }
            state = {...state, loadButton: button};
            break;
        }

        case Articles.FETCH_ARTICLES_REJECTED: {
            state = {...state, is_fetching: false, error_message: action.payload.message};
            break;
        }

        case Articles.LOAD_MORE_PENDING: {
            state = {...state, is_fetching: true};
            break;
        }

        case Articles.LOAD_MORE_FULFILLED: {
            let data = action.payload.data;
            let dataLength = action.payload.data.length;
            data.splice(action.payload.data.length-state.articles.length, state.articles.length);
            let articlesLoad = data.slice(-4).reverse();
            let articles = state.articles.concat(articlesLoad);
            state = {...state, is_fetching: false, articles: articles};

            if(dataLength === state.articles.length) {
                var button = true;
            } else {
                var button = false;
            }
            state = {...state, loadButton: button};
            break;
        }

        case Articles.LOAD_MORE_REJECTED: {
            state = {...state, is_fetching: false, error_message: action.payload.message};
            break;
        }
    }

    return state;
}