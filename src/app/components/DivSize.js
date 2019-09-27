import React, { Component } from "react";
import {changeHeight} from "../actions/commentsActions";
import {changeVisible} from "../actions/commentsActions";
import {connect} from "react-redux";

@connect((store) => {
    return {
        display: store.comments.display,
        textHeight: store.comments.textHeight
    }
})

export default class DivSize extends Component {
    componentWillUpdate() {
        const height = this.divElement.clientHeight;
        this.props.dispatch(changeHeight(height));
    }

    componentDidUpdate() {
        (!this.props.textHeight) && this.props.dispatch(changeVisible());
    }

    render() {
        return (
            <div className={(this.props.display) ? "hidden-div" + " visible" : "hidden-div" + " hidden"} ref={ (divElement) => this.divElement = divElement}>
                {this.props.usermessage ? this.props.usermessage : 'JOIN THE DISCUSSION'}
            </div>
        );
    }
}