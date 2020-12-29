import { DISHES } from '../shared/dishes'; 

export const Dishes = (state = DISHES, action) => { // если state не определено то значение по умолчанию - DISHES
    switch(action.type) {
        default:
            return state; //возвращается просто текущее состояние
    }
}