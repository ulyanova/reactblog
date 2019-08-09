import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Lifestyle from "../pages/Lifestyle";
import Photodiary from "../pages/Photodiary";
import Page from "../pages/Page";
import Travel from "../pages/Travel";
import Music from "../pages/Music";

export default class Layout extends Component {
    render() {
        return (
            <div className="content">
                <Switch>
                    <Route exact path="/" component={Page} />
                    <Route path="/lifestyle" component={Page} />
                    <Route path="/photodiary" component={Page} />
                    <Route path="/music" component={Page} />
                    <Route path="/travel" component={Page} />
                </Switch>
            </div>
        );
    }
}
