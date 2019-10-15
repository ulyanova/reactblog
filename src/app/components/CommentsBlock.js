import React, {PureComponent} from 'react';
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

export default class CommentsBlock extends PureComponent {
    constructor() {
        super();

        this.state = {
            sum: 0
        };
    }

    componentDidUpdate() {
        let commentsSum = this.props.comments.length;
        let arr = this.props.comments.map(function(comment) {
            if (comment.replies) {
                return comment.replies.length;
            } else {
                return 0;
            }
        });
        let repliesSum = arr.reduce(function(sum, current) {
            return sum + current;
        }, 0);
        let result = repliesSum + commentsSum;
        this.setState({sum: result});
    }

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
                                {
                                    (this.props.comments.length)
                                        ?
                                        <p className="article-type__p">{this.state.sum + ' comments'}</p>
                                        :
                                        <p className="article-type__p">Be the first to comment on this post!</p>
                                }
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