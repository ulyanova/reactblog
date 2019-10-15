import React, {Component} from 'react';
import Comment from './Comment';

import { connect } from 'react-redux';

@connect((store) => {
    return {
        comments: store.comments.comments,
        users: store.users.users,
        authorization: store.users.authorization
    }
})

export default class CommentsList extends Component {
    render()
    {
        let comments = this.props.replies.map((comment, index) => {
            let user = this.props.users.find(user => user.id === comment.userId);
            return <Comment key={index} user={user} {...comment} />;
        });

        return (
            <>
                {comments}
            </>
        );
    }
}