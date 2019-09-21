import React, {Component} from 'react';
import Comment from './Comment';

import { connect } from 'react-redux';

@connect((store) => {
    return {
        comments: store.comments.comments,
        is_comments_fetching: store.comments.is_fetching,
        users: store.users.users,
        is_users_fetching: store.users.is_fetching
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
                        (this.props.is_comments_fetching || this.props.is_users_fetching)
                            ?
                            'Pending...'
                            :
                            (comments)
                    }
                </div>
            </div>
        );
    }
}