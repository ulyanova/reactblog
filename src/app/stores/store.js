import { createStore, combineReducers, applyMiddleware } from 'redux';

import { articlesReducer } from '../reducers/articlesReducer';

import promise from 'redux-promise-middleware';
import logger from 'redux-logger';

//const middleware = applyMiddleware(logger());
//const middleware = applyMiddleware(promise());
const middleware = applyMiddleware(promise(), logger());

const reducers = combineReducers({
    articles: articlesReducer(),
    //user: userReducer
});

const store = createStore(reducers, middleware);

export default store;