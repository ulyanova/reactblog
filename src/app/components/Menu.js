import React, { Component } from "react";
import {Link} from 'react-router-dom';

export default class Menu extends Component {
    render() {
        console.log(this.props.children);
        return (
            <div className="header">
                <Link to="/" className="logo header__logo">{this.props.brand}</Link>
                <ul className='menu'>
                    {this.props.children}
                </ul>
            </div>
        );
    }
}