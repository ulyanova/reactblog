import React, {Component} from 'react';
import Reply from './Reply';
import AuthModal from './AuthModal';

import { connect } from 'react-redux';
import NewComment from "./NewComment";

@connect((store) => {
    return {
        users: store.users.users,
        authorization: store.users.authorization
    }
})

export default class ReplyCommentsList extends Component {
    render()
    {
        let replies = this.props.replies.map((comment, index) => {
            let user = this.props.users.find(user => user.id === comment.userId);
            return <Reply key={index} user={user} {...comment} />;
        });

        return (
            <>
                {replies}
            </>
        );
    }
}