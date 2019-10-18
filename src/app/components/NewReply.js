import React, { Component } from "react";
import { connect } from 'react-redux';
import {addReply, updateCount} from "../actions/commentsActions";

@connect((store) => {
    return {
        auth_user: store.users.auth_user,
        articles: store.articles.articles,
        count: store.comments.count
    }
})

export default class NewReply extends Component {
    render() {
        return (
            <div className="comment comment-new">
                {
                    this.props.auth_user.photo ? <img src={this.props.auth_user.photo} className="comment-userimg" /> :
                        <p className="comment-userimg comment-userimg__p">{this.props.auth_user.name.match(/\b\w/g).join('')}</p>
                }
                <div id="text" className="comment-block">
                    <div id="usermessage" className="comment__textarea" tabIndex="0" contentEditable="true" suppressContentEditableWarning={true}
                         role="textbox" aria-multiline="true">
                    </div>
                    <a href="#" className="comment__a" onClick={(event) => {
                        event.preventDefault();
                        let usermessage = document.getElementById('usermessage').textContent;
                        let comment = {
                            postId: this.props.articles[0].id,
                            id: String(Number(this.props.count) + 1),
                            commentId: this.props.commentId,
                            userId: this.props.auth_user.id,
                            body: usermessage,
                            replies: []
                        }
                        this.props.dispatch(addReply(comment));
                        this.props.dispatch(updateCount(Number(this.props.count) + 1));
                        document.getElementById('usermessage').textContent = '';
                        this.props.show(false);
                    }}>send</a>
                    <a href="#" className="comment__a" onClick={(event) => {
                        event.preventDefault();
                        document.getElementById('usermessage').textContent = '';
                        this.props.show(false);
                    }}>cancel</a>
                </div>
            </div>
        );
    }
}