import React from "react";
import ReactDOM from "react-dom";
import {Router, Route} from "react-router";
import {BrowserRouter} from "react-router-dom";

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
        <BrowserRouter>
            <Route path="/" component={Layout}>
                <Route exact path="/" component={Main} />
                <Route path="lifestyle" component={Lifestyle} />
                <Route path="photodiary" component={Photodiary} />
                <Route path="music" component={Music} />
                <Route path="travel" component={Travel} />
                <Route component={PageNotFound} />
            </Route>
        </BrowserRouter>
    </Provider>,
    document.getElementById('app'));