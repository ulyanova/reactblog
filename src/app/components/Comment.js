import React, { Component } from "react";
import {connect} from "react-redux";
import {deleteComment, deleteReply} from "../actions/commentsActions";
import CommentsList from './CommentsList';
import NewReply from "./NewReply";


@connect((store) => {
    return {
        auth_user: store.users.auth_user,
        authorization: store.users.authorization
    }
})

export default class Comment extends Component {
    constructor() {
        super();

        this.state = {
            render: false
        };

        this.show = this.show.bind(this);
    }

    show(text) {
        this.setState({render: text});
    }

    render() {
        return (
            <div className="comment">
                {
                    this.props.user.photo ? <img src={this.props.user.photo} className="comment-userimg" /> :
                        <p className="comment-userimg comment-userimg__p">{this.props.user.name.match(/\b\w/g).join('')}</p>
                }
                <div className="comment-block">
                    <p className="comment-username__p">{this.props.user.name}</p>
                    <p className="comment__p">{this.props.body}</p>
                    {
                        this.props.user.id === this.props.auth_user.id ?
                            <a href="#" className={this.props.authorization ? "comment__a active" : "comment__a passive"} onClick={(event) => {
                                event.preventDefault();
                                (this.props.commentId) ?
                                    this.props.dispatch(deleteReply(this.props)) :
                                    this.props.dispatch(deleteComment(this.props.id))
                            }}>delete</a> :
                            <a href="#" className={this.props.authorization ? "comment__a active" : "comment__a passive"} onClick={(event) => {
                                event.preventDefault();
                                this.show(true);
                            }}>reply</a>
                    }
                    {
                        (this.props.replies)
                            &&
                            <div className="reply-block">
                                <CommentsList replies={this.props.replies} />
                                {
                                    this.state.render
                                    &&
                                    <NewReply commentId = {this.props.commentId ? this.props.commentId : this.props.id} show = {this.show} />
                                }
                            </div>
                    }
                </div>
            </div>
        );
    }
}