import React, { Component } from "react";
import {changeHeight} from "../actions/commentsActions";

import {connect} from "react-redux";

@connect((store) => {
    return {
        comments: store.comments.comments,
        //textHeight: store.comments.textHeight
    }
})

export default class DivSize1 extends Component {
    componentWillUpdate() {
        const height = this.divElement.clientHeight;
        this.props.dispatch(changeHeight(height));
        console.log(height, this.props.comments.textHeight);
    }

    render() {
        return (
            <div className="hidden-div" ref={ (divElement) => this.divElement = divElement}>
                {this.props.usermessage ? this.props.usermessage : 'JOIN THE DISCUSSION'}
            </div>
        );
    }
}