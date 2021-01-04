import * as ActionTypes from './ActionTypes'; //import ALL ActionTypes

export const Comments = (state = {
    errMess: null,
    comments: []
    }, action) => { // если state не определено то значение по умолчанию - DISHES
    switch(action.type) {
        case ActionTypes.ADD_COMMENTS:
            return {...state, isLoading: false, errMess: null, comments: action.payload};

        case ActionTypes.COMMENTS_FAILED:
            return {...state, isLoading: false, errMess: action.payload, comments: []};

        case ActionTypes.ADD_COMMENT://если происходит действие соответствующее ADD_COMMENT, то ...
            var comment = action.payload; // из ActionCreators.js берешь данные из объекта payload
            comment.id = state.comments.length; // 0 1 2 3 4 ..
            comment.date = new Date().toISOString();
            return {...state, comments: state.comments.concat(comment)};// add comment to state of comments
        default:
            return state; //возвращается просто текущее состояние
    }
}