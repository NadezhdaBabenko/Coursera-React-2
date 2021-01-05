// import { LEADERS } from '../shared/leaders';
import * as ActionTypes from './ActionTypes'; //import ALL ActionTypes


export const Leaders = (state = {
        isLoading: true,
        errMess: null,
        leaders: []
    }, action) => { // если state не определено то значение по умолчанию - LEADERS
    switch(action.type) {
        case ActionTypes.ADD_LEADERS:
            return {...state, isLoading: false, errMess: null, leaders: action.payload};

        case ActionTypes.LEADERS_LOADING:
            // => берет текущее состояние и вторым параментом - применяет изменения
            return {...state, isLoading: true, errMess: null, leaders: []}; // тот жу state из параметра входящего - export const Dishes = (state = { ... 
        
        case ActionTypes.LEADERS_FAILED:
            return {...state, isLoading: false, errMess: action.payload, leaders: []};

        default:
            return state; //возвращается просто текущее состояние
    }
}