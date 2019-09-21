import { createStore, combineReducers, applyMiddleware } from 'redux';

import { articlesReducer } from '../reducers/articlesReducer';
import { commentsReducer } from '../reducers/commentsReducer';
import { usersReducer } from '../reducers/usersReducer';

import promise from 'redux-promise-middleware';
import logger from 'redux-logger';

//const middleware = applyMiddleware(logger());
//const middleware = applyMiddleware(promise());
const middleware = applyMiddleware(promise, logger);

const reducers = combineReducers({
    articles: articlesReducer,
    comments: commentsReducer,
    users: usersReducer
});

const store = createStore(reducers, middleware);

export default store;