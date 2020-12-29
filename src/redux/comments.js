import { COMMENTS } from '../shared/comments';
import * as ActionTypes from './ActionTypes'; //import ALL ActionTypes


export const Comments = (state = COMMENTS, action) => { // если state не определено то значение по умолчанию - DISHES
    switch(action.type) {
        case ActionTypes.ADD_COMMENT://если происходит действие соответствующее ADD_COMMENT, то ...
            var comment = action.payload; // из ActionCreators.js берешь данные из объекта payload
            comment.id = state.length; // 0 1 2 3 4 ..
            comment.date = new Date().toISOString();
            return state.concat(comment);// add comment to state of comments
        default:
            return state; //возвращается просто текущее состояние
    }
}