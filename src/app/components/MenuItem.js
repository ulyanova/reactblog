import React, { Component } from "react";
import {NavLink} from 'react-router-dom';

export default class MenuItem extends Component {
    render() {
        return (
            <li>
                <NavLink exact to={this.props.href} activeClassName="active">
                    {this.props.children}
                </NavLink>
            </li>
        );
    }
}
/*className={this.props.active ? 'active' : ''} - было для элемента li*/