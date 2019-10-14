import * as Comments from '../constants/comments';

export function commentsReducer(state = {comments: [], is_fetching: false, textHeight: 80, display: false}, action) {
    switch (action.type) {
        case Comments.FETCH_COMMENTS_PENDING: {
            state = {...state, is_fetching: true};
            break;
        }

        case Comments.FETCH_COMMENTS_FULFILLED: {
            state = {...state, is_fetching: false, comments: action.payload.data};
            break;
        }

        case Comments.FETCH_COMMENTS_REJECTED: {
            state = {...state, is_fetching: false, error_message: action.payload.message};
            break;
        }

        case Comments.ADD_COMMENT: {
            let comments = [...state.comments];
            comments.push(action.payload);
            state = {...state, comments: comments};
            break;
        }

        case Comments.DELETE_COMMENT: {
            let comments = [...state.comments];
            let delComment = comments.find(comment => comment.id === action.payload);
            let position = comments.indexOf(delComment);
            comments.splice(position, 1);
            state = {...state, comments: comments};
            break;
        }

        case Comments.DELETE_REPLY: {
            let comments = [...state.comments];
            console.log(comments);
            console.log(action.payload);
            let comment = comments.find(comment => comment.id === action.payload.commentId);
            console.log(comment);
            let replies = comment.replies;
            console.log(replies);
            let delReplies = replies.find(comment => comment.id === action.payload.id);
            console.log(delReplies);
            let position = replies.indexOf(delReplies);
            console.log(position);
            replies.splice(position, 1);
            console.log(replies);
            console.log(comments);
            state = {...state, comments: comments};
            break;
        }

        case Comments.CHANGE_HEIGHT: {
            state = {...state, textHeight: action.payload, display: false};
            break;
        }

        case Comments.CHANGE_VISIBLE: {
            state = {...state, display: true};
            break;
        }
    }

    return state;

}





