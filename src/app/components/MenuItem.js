import React, { Component } from "react";
import {NavLink} from 'react-router-dom';

export default class MenuItem extends Component {
    render() {
        return (
            <li className="menu__li">
                <NavLink exact to={this.props.href} activeClassName="menu__a_active" className="menu__a">
                    {this.props.children}
                </NavLink>
            </li>
        );
    }
}