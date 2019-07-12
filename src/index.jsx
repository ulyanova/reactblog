import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router} from "react-router-dom";
import {Provider} from 'react-redux';
import store from './app/stores/store';

import Layout from './app/layouts/Layout';

import "./app/styles/style.css";

ReactDOM.render((
    <Provider store={store}>
        <Router>
            <Layout/>
        </Router>
    </Provider>
), document.getElementById('app'));