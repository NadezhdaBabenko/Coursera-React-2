import * as ActionTypes from './ActionTypes'; //import ALL ActionTypes

export const Promotions = (state = {
        isLoading: true,
        errMess: null,
        promotions: []
    }, action) => { // если state не определено то значение по умолчанию - DISHES
    switch(action.type) {
        case ActionTypes.ADD_PROMOS:
            return {...state, isLoading: false, errMess: null, promotions: action.payload};

        case ActionTypes.PROMOS_LOADING:
            // => берет текущее состояние и вторым параментом - применяет изменения
            return {...state, isLoading: true, errMess: null, promotions: []}; // тот жу state из параметра входящего - export const Dishes = (state = { ... 
        
        case ActionTypes.PROMOS_FAILED:
            return {...state, isLoading: false, errMess: action.payload, promotions: []};
        
        default:
            return state; //возвращается просто текущее состояние
    }
}