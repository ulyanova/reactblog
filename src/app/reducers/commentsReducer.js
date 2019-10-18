import * as Comments from '../constants/comments';

export function commentsReducer(state = {comments: [], is_comments_fetching: false, all_comments: [], is_all_comments_fetching: false, count: 0}, action) {
    switch (action.type) {
        case Comments.FETCH_COMMENTS_PENDING: {
            state = {...state, is_comments_fetching: true};
            break;
        }

        case Comments.FETCH_COMMENTS_FULFILLED: {
            state = {...state, is_comments_fetching: false, comments: action.payload.data};
            break;
        }

        case Comments.FETCH_COMMENTS_REJECTED: {
            state = {...state, is_comments_fetching: false, error_message: action.payload.message};
            break;
        }

        case Comments.FETCH_ALL_COMMENTS_PENDING: {
            state = {...state, is_all_comments_fetching: true};
            break;
        }

        case Comments.FETCH_ALL_COMMENTS_FULFILLED: {

            //массив всех комментариев
            let comments = action.payload.data;
            //массив с массивами вложенных комментариев
            let replies = action.payload.data.map(function (comment) {
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

            state = {...state, is_all_comments_fetching: false, all_comments: action.payload.data, count: max};
            break;
        }

        case Comments.FETCH_ALL_COMMENTS_REJECTED: {
            state = {...state, is_all_comments_fetching: false, error_message: action.payload.message};
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

        case Comments.ADD_REPLY: {
            let comments = [...state.comments];
            let comment = comments.find(comment => comment.id === action.payload.commentId);
            let replies = comment.replies;
            replies.push(action.payload);
            state = {...state, comments: comments};
            break;
        }

        case Comments.DELETE_REPLY: {
            let comments = [...state.comments];
            let comment = comments.find(comment => comment.id === action.payload.commentId);
            let replies = comment.replies;
            let delReplies = replies.find(comment => comment.id === action.payload.id);
            let position = replies.indexOf(delReplies);
            replies.splice(position, 1);
            state = {...state, comments: comments};
            break;
        }

        case Comments.UPDATE_COUNT: {
            state = {...state, count: action.payload};
            break;
        }
    }

    return state;

}





