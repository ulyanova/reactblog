import React, {Component} from 'react';
import CommentsList from './CommentsList';
import AuthModal from './AuthModal';
import NewComment from "./NewComment";

import { connect } from 'react-redux';

@connect((store) => {
    return {
        authorization: store.users.authorization,
        comments: store.comments.comments,
        is_comments_fetching: store.comments.is_comments_fetching,
        is_users_fetching: store.users.is_users_fetching
    }
})

export default class CommentsBlock extends Component {
    render()
    {
        return (
            <>
                {
                    (this.props.is_comments_fetching || this.props.is_users_fetching)
                        ?
                        <div className="container">
                            <div className="articles">
                                <h5 className="article-type__p">Pending...</h5>
                            </div>
                        </div>
                        :
                        <div className="container">
                            <div className="comments">
                                <CommentsList replies={this.props.comments} />
                                <div className="comment comment-new">
                                    {
                                        (!this.props.authorization) ? <AuthModal /> : <NewComment />
                                    }
                                </div>
                            </div>
                        </div>
                }
            </>
            );
    }
}