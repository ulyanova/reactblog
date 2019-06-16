import React, { Component } from "react";
import Menu from "../components/Menu";

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="logo header__logo"></div>
                <Menu data = {this.props.data} />
            </div>
        );
    }
}