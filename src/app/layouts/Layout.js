import React, { Component } from "react";
import {Link} from 'react-router-dom';
import Menu from '../components/Menu';
import MenuItem from '../components/MenuItem';
import Footer from "../components/Footer";

export default class Layout extends Component {
    constructor() {
        super(...arguments);
        this.brand = 'minimo';
    }

    isActive(href) {
        return window.location.pathname === href;
    }

    render() {
        console.log(this.props.children);
        return (
            <div className="container">
                <Menu brand={this.brand}>
                    <MenuItem href="/" active={this.isActive('/')}>Main</MenuItem>
                    <MenuItem href="/lifestyle" active={this.isActive('/lifestyle')}>lifestyle</MenuItem>
                    <MenuItem href="/photodiary" active={this.isActive('/photodiary')}>photodiary</MenuItem>
                    <MenuItem href="/music" active={this.isActive('/music')}>music</MenuItem>
                    <MenuItem href="/travel" active={this.isActive('/travel')}>travel</MenuItem>
                </Menu>
                <div className="content">
                    {this.props.children}
                    <Link to="/errorpage">Перейти на страницу с ошибкой</Link>
                </div>
                <Footer />
            </div>
        );
    }
}