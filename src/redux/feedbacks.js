import * as ActionTypes from './ActionTypes'; //import ALL ActionTypes

export const Feedbacks = (state = {
    errMess: null,
    feedbacks: []
    }, action) => { // если state не определено то значение по умолчанию - DISHES
    switch(action.type) {
        case ActionTypes.ADD_FEEDBACKS:
            return {...state, isLoading: false, errMess: null, feedbacks: action.payload};

        case ActionTypes.FEEDBACKS_FAILED:
            return {...state, isLoading: false, errMess: action.payload, feedbacks: []};

        case ActionTypes.ADD_FEEDBACK://если происходит действие соответствующее ADD_COMMENT, то ...
            var feedback = action.payload; // из ActionCreators.js берешь данные из объекта payload
            return {...state, feedbacks: state.feedbacks.concat(feedback)};// add comment to state of comments
        default:
            return state; //возвращается просто текущее состояние
    }
}