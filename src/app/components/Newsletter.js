import React, { Component } from "react";

export default class Newsletter extends Component {
    render() {
        return (
            <div className="newsletter">
                <div className="container">
                    <div className="newsletter__form">
                        <h3 className="newsletter__h3">Sign up&nbsp;for our newsletter!</h3>
                        <div className="newsletter__input">
                            <input type="text" placeholder="Enter a&nbsp;valid email address"/>
                            <a href="#"><i className="icon-right-open" onClick={(event)=>{
                                event.preventDefault();
                            }}></i></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
