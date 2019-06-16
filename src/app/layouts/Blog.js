import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default class Blog extends Component {
    render() {
        const menuItems = [
            {href: "lifestyle", name: "lifestyle"},
            {href: "photodiary", name: "photodiary"},
            {href: "music", name: "music"},
            {href: "travel", name: "travel"}
        ];

        return (
            <div className="container">
                <Header data = {menuItems} />
                <Footer />
            </div>
        )
    }
}