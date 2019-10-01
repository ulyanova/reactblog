import React, {Component} from 'react';
import Comment from './Comment';
import AuthModal from './AuthModal';

import { connect } from 'react-redux';
import NewComment from "./NewComment";

@connect((store) => {
    return {
        comments: store.comments.comments,
        is_comments_fetching: store.comments.is_fetching,
        users: store.users.users,
        is_users_fetching: store.users.is_fetching,
        authorization: store.users.authorization
    }
})

export default class CommentsList extends Component {
    render()
    {
        let comments = this.props.comments.map((comment, index) => {
            let user = this.props.users.find(user => user.id === comment.userId);
            return <Comment key={index} user={user} {...comment} />;
        });

        return (
            <div className="container">
                <div className="comments">
                    {
                        (this.props.comments.length)
                            ?
                            <p className="article-type__p">{this.props.comments.length + ' comments'}</p>
                            :
                            <p className="article-type__p">Be the first to comment on this post!</p>
                    }
                    {
                        (this.props.is_comments_fetching || this.props.is_users_fetching)
                            ?
                            'Pending...'
                            :
                            (comments)
                    }
                    <div className="comment comment-new">
                        {
                            (!this.props.authorization) ? <AuthModal /> : <NewComment />
                        }
                    </div>
                </div>
            </div>
        );
    }
}