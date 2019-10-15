import * as Articles from '../constants/articles';

export function articlesReducer(state = {articles: [], is_fetching: false, articlesLike: [], is_articlesLike_fetching: false}, action) {
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

        case Articles.FETCH_POST_PENDING: {
            state = {...state, is_fetching: true};
            break;
        }
        case Articles.FETCH_POST_FULFILLED: {
            state = {...state, is_fetching: false, articles: action.payload.data};
            break;
        }
        case Articles.FETCH_POST_REJECTED: {
            state = {...state, is_fetching: false, error_message: action.payload.message};
            break;
        }

        case Articles.FETCH_ARTICLES_LIKE_PENDING: {
            state = {...state, is_articlesLike_fetching: true};
            break;
        }

        case Articles.FETCH_ARTICLES_LIKE_FULFILLED: {
            var items = [];
            var dataL = action.payload.data;
            var n;

            //удаляем из массива статью, отображенную на странице
            dataL.forEach((item, index) => {
                if(item.id == state.articles[0].id) {
                    n = index;
                    return n;
                } else {
                    return null;
                }
            });
            dataL.splice(n, 1);

            //выбираем 3 рандомные статьи
            for(let i =0; i<3; i++){
                var elem = dataL.splice([Math.floor(Math.random()*action.payload.data.length)], 1);
                dataL.splice([Math.floor(Math.random()*action.payload.data.length)], 1);
                items = items.concat(elem);
            }

            state = {...state, is_articlesLike_fetching: false, articlesLike: items};
            break;
        }

        case Articles.FETCH_ARTICLES_LIKE_REJECTED: {
            state = {...state, is_articlesLike_fetching: false, error_message: action.payload.message};
            break;
        }
    }

    return state;
}





