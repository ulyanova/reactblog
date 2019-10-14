import React, { Component } from "react";
import {connect} from "react-redux";
import {deleteComment, deleteReply} from "../actions/commentsActions";
import ReplyCommentsList from './ReplyCommentsList';


@connect((store) => {
    return {
        auth_user: store.users.auth_user,
    }
})

export default class Comment extends Component {

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
                            <a href="#" className="comment__a" onClick={(event) => {
                                event.preventDefault();
                                console.log(this.props);
                                (this.props.commentId) ?
                                    this.props.dispatch(deleteReply(this.props)) :
                                    this.props.dispatch(deleteComment(this.props.id))
                            }}>delete</a> :
                            <a href="#" className="comment__a" onClick={(event) => {
                            event.preventDefault();}
                            }>reply</a>
                    }
                    {
                        (this.props.replies)
                            &&
                            <div className="reply-block">
                                <ReplyCommentsList replies={this.props.replies} />
                            </div>
                    }
                </div>
            </div>
        );
    }
}