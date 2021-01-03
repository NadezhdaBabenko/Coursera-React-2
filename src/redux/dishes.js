import * as ActionTypes from './ActionTypes'; //import ALL ActionTypes

export const Dishes = (state = {
        isLoading: true,
        errMess: null,
        dishes: []
    }, action) => { // если state не определено то значение по умолчанию - DISHES
    switch(action.type) {
        case ActionTypes.ADD_DISHES:
            return {...state, isLoading: false, errMess: null, dishes: action.payload};

        case ActionTypes.DISHES_LOADING:
            // => берет текущее состояние и вторым параментом - применяет изменения
            return {...state, isLoading: true, errMess: null, dishes: []}; // тот жу state из параметра входящего - export const Dishes = (state = { ... 
        
        case ActionTypes.DISHES_FAILED:
            return {...state, isLoading: false, errMess: action.payload, dishes: []};
        
        default:
            return state; //возвращается просто текущее состояние
    }
}