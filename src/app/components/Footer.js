import React, { Component } from "react";

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="container footer__div">
                    <div className="footer-links">
                        <a href="#" className="footer__a">Terms and conditions</a>
                        <a href="#" className="footer__a">Privacy</a>
                    </div>
                    <div className="footer-social">
                        <p className="footer__p">Follow</p>
                        <a href="#" className="social__a"><i className="icon-facebook"></i></a>
                        <a href="#" className="social__a"><i className="icon-twitter"></i></a>
                        <a href="#" className="social__a"><i className="icon-instagram-1"></i></a>
                    </div>
                </div>
            </div>
        );
    }
}