import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, IndexRoute, browserHistory} from "react-router";

import Layout from './app/layouts/Layout';
import PageNotFound from "./app/pages/PageNotFound";
import Main from "./app/pages/Main";
import Lifestyle from "./app/pages/Lifestyle";
import Photodiary from "./app/pages/Photodiary";
import Music from "./app/pages/Music";
import Travel from "./app/pages/Travel";

import "./app/styles/style.css";

import {Provider} from "react-redux";
import store from './app/stores/store';

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={Layout}>
                <IndexRoute component={Main} />
                <Route path="lifestyle" component={Lifestyle} />
                <Route path="photodiary" component={Photodiary} />
                <Route path="music" component={Music} />
                <Route path="travel" component={Travel} />
                <Route path="*" component={PageNotFound} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app'));