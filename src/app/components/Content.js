import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Lifestyle from "../pages/Lifestyle";
import Photodiary from "../pages/Photodiary";
import Main from "../pages/Main";
import Travel from "../pages/Travel";
import Music from "../pages/Music";

export default class Layout extends Component {
    render() {
        return (
            <div className="content">
                <Switch>
                    <Route exact path="/" component={Main} />
                    <Route path="/lifestyle" component={Lifestyle} />
                    <Route path="/photodiary" component={Photodiary} />
                    <Route path="/music" component={Music} />
                    <Route path="/travel" component={Travel} />
                </Switch>
            </div>
        );
    }
}
