import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Lifestyle from "../pages/Lifestyle";
import Photodiary from "../pages/Photodiary";
import Page from "../pages/Page";
import Travel from "../pages/Travel";
import Music from "../pages/Music";
import ArticleFullPage from "../pages/ArticleFullPage";

export default class Layout extends Component {
    render() {
        return (
            <div className="content">
                <Switch>
                    <Route exact path="/" component={Page} />
                    <Route path="/lifestyle" component={Lifestyle} />
                    <Route path="/photodiary" component={Photodiary} />
                    <Route path="/music" component={Music} />
                    <Route path="/travel" component={Travel} />
                    <Route path="/post/:id" component={ArticleFullPage} />
                </Switch>
            </div>
        );
    }
}
