import { createStore, combineReducers } from 'redux'; //позволяет мне импортировать reducer и initialState.
import { Dishes } from './dishes'; //reducer
import { Comments } from './comments';//reducer
import { Promotions } from './promotions';//reducer
import { Leaders } from './leaders';//reducer



export const ConfigureStore = () => {
    const store = createStore( //два параметра берем из reducer.js
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders
        })
    );

    return store;
}

