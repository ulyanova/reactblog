import React, { Component } from "react";
import { connect } from 'react-redux';
import {addComment} from "../actions/commentsActions";
import DivSize from "./DivSize";

@connect((store) => {
    return {
        auth_user: store.users.auth_user,
        comments: store.comments.comments,
        articles: store.articles.articles,
        textHeight: store.comments.textHeight
    }
})

export default class NewComment extends Component {
    constructor() {
        super();

        this.state = {
            usermessage: ''
        };

        this.handleChangeMessage = this.handleChangeMessage.bind(this);
    }

    handleChangeMessage(event) {
        this.setState({usermessage: event.target.value});
    }

    render() {
        return (
            <>
                {
                    this.props.auth_user.photo ? <img src={this.props.auth_user.photo} className="comment-userimg" /> :
                        <p className="comment-userimg comment-userimg__p">{this.props.auth_user.name.match(/\b\w/g).join('')}</p>
                }
                <div id="text" className="comment-block">
                    <DivSize usermessage={this.state.usermessage} />
                    <form>
                        <textarea id="usermessage" className="comment__textarea" style={{height: this.props.textHeight}} placeholder="JOIN THE DISCUSSION" value={this.state.usermessage} onChange={this.handleChangeMessage}></textarea>
                    </form>
                    <a href="#" className="comment__a" onClick={(event) => {
                        event.preventDefault();
                        let comment = {
                            postId: this.props.articles[0].id,
                            id: String(this.props.comments.length+1),
                            userId: this.props.auth_user.id,
                            body: this.state.usermessage
                        }
                        this.props.dispatch(addComment(comment));
                        this.setState({usermessage: ''});
                    }}>send</a>
                    <a href="#" className="comment__a" onClick={(event) => {
                        event.preventDefault();
                        this.setState({usermessage: ''});
                    }}>cancel</a>
                </div>
            </>
        );
    }
}