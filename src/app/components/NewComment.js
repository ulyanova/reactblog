import React, { Component } from "react";
import { connect } from 'react-redux';
import {addComment} from "../actions/commentsActions";
import DivSize from "./DivSize";

@connect((store) => {
    return {
        auth_user: store.users.auth_user,
        all_comments: store.comments.all_comments,
        articles: store.articles.articles,
        textHeight: store.comments.textHeight
    }
})

export default class NewComment extends Component {
    constructor() {
        super();

        this.state = {
            usermessage: '',
            count: 0
        };

        this.handleChangeMessage = this.handleChangeMessage.bind(this);
    }

    handleChangeMessage(event) {
        this.setState({usermessage: event.target.value});
    }

    componentDidMount() {
        //массив всех комментариев
        let comments = this.props.all_comments;
        //массив с массивами вложенных комментариев
        let replies = this.props.all_comments.map(function (comment) {
            return comment.replies;
        });
        //объединяем все массивы вложенных комментариев в один массив
        replies = replies.reduce((prev, item) => prev.concat(item), Array(0));
        //объединяем все комментарии в один массив
        comments = comments.concat(replies);
        //выбираем только id комментариев
        let commentsId = comments.map((comment) => comment.id);
        //выбираем максимальное значение id
        let max = commentsId.reduce((prev, cur) => cur > prev ? cur : prev);
        this.setState({count: Number(max)});
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
                            id: String(this.state.count + 1),
                            userId: this.props.auth_user.id,
                            body: this.state.usermessage
                        }
                        this.props.dispatch(addComment(comment));
                        this.setState({usermessage: '', count: this.state.count + 1});
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