import { PROMOTIONS } from '../shared/promotions'; //именно здесь будут изменяться состояния

export const Promotions = (state = PROMOTIONS, action) => { // если state не определено то значение по умолчанию - DISHES
    switch(action.type) {
        default:
            return state; //возвращается просто текущее состояние
    }
}