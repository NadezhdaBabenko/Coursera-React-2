import { DISHES } from '../shared/dishes'; 
import { COMMENTS } from '../shared/comments';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions'; //именно здесь будут изменяться состояния

export const initialState = {//  начальная конфигурация для моего состояния
    dishes: DISHES,
    comments: COMMENTS,
    promotions: PROMOTIONS,
    leaders: LEADERS
};

export const Reducer = (state = initialState, action) => { //чистая функция, и поэтому я не могу изменять состояние прямо здесь, в редукторе, Я могу сделать только неизменное изменение и затем верните обновленную версию состояния из этого редуктора. 
    //Когда только запускается ф-ция нет начального состояния - поэтому ты задаешь его state = initialState
    return state;
}; //получит текущее состояние и действие -> это нужно для генирации следующего состояния

