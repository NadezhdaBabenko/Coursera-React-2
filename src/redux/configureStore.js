import { createStore, combineReducers, applyMiddleware } from 'redux'; //позволяет мне импортировать reducer и initialState.
import { Dishes } from './dishes'; //reducer
import { Comments } from './comments';//reducer
import { Promotions } from './promotions';//reducer
import { Leaders } from './leaders';//reducer
import thunk from 'redux-thunk';
import logger from 'redux-logger'; //выводит инфу о действиях  и сосояниях в консоль

export const ConfigureStore = () => {
    const store = createStore( //два параметра берем из reducer.js
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders
        }),
        applyMiddleware(thunk, logger) 
    );
    
    return store;
}

