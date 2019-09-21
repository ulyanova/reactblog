import React, { Component } from "react";

export default class Comment extends Component {

    render() {
        return (
            <div className="comment">
                {
                    this.props.user.photo ? <img src={this.props.user.photo} className="comment-user__img" /> :
                        <p>{this.props.user.name.match(/\b\w/g).join('')}</p>
                }
                <div className="comment-block">
                    <p className="comment-username__p">{this.props.user.name}</p>
                    <p className="comment__p">{this.props.body}</p>
                    <a href="#" className="comment__a">reply</a>
                </div>
            </div>
        );
    }
}