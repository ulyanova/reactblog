import React, { Component } from "react";
import {Link} from 'react-router-dom';

export default class Menu extends Component {
    render() {
        return (
            <div className="header clearfix">
                <div className="container">
                    <Link to="/" className="logo header__logo">{this.props.brand}</Link>
                    <ul className='menu'>
                        {this.props.children}
                    </ul>
                </div>
            </div>
        );
    }
}