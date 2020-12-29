import { LEADERS } from '../shared/leaders';

export const Leaders = (state = LEADERS, action) => { // если state не определено то значение по умолчанию - DISHES
    switch(action.type) {
        default:
            return state; //возвращается просто текущее состояние
    }
}