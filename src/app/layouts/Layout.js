import React, { Component } from "react";

import Header from '../components/Header';
import Content from '../components/Content';
import Footer from "../components/Footer";

export default class Layout extends Component {
    render() {
        return (
            <>
                <Header />
                <Content />
                <Footer />
            </>
        );
    }
}
