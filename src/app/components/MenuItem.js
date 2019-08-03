import React, { Component } from "react";
import {NavLink} from 'react-router-dom';

export default class MenuItem extends Component {
    render() {
        return (
            <li className="menu__li">
                <NavLink exact to={this.props.href} activeClassName="active" className="menu__a">
                    {this.props.children}
                </NavLink>
            </li>
        );
    }
}
/*className={this.props.active ? 'active' : ''} - было для элемента li*/