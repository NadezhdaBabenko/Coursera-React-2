import { createStore } from 'redux'; //позволяет мне импортировать reducer и initialState.
import { Reducer, initialState } from './reducer';

export const ConfigureStore = () => {
    const store = createStore( //два параметра берем из reducer.js
        Reducer, //саму ф-цию
        initialState // и начальное состояние
    );

    return store;
}

