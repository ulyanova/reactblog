import React, { Component } from "react";
import Menu from './Menu';
import MenuItem from './MenuItem';

export default class Header extends Component {
    constructor() {
        super(...arguments);
        this.brand = 'minimo';
    }

    isActive(href) {
        return window.location.pathname === href;
    }

    render() {
        return (
            <Menu brand={this.brand}>
                <MenuItem href="/" active={this.isActive('/')}>Main</MenuItem>
                <MenuItem href="/lifestyle" active={this.isActive('/lifestyle')}>lifestyle</MenuItem>
                <MenuItem href="/photodiary" active={this.isActive('/photodiary')}>photodiary</MenuItem>
                <MenuItem href="/music" active={this.isActive('/music')}>music</MenuItem>
                <MenuItem href="/travel" active={this.isActive('/travel')}>travel</MenuItem>
            </Menu>
        );
    }
}