import { COMMENTS } from '../shared/comments';

export const Comments = (state = COMMENTS, action) => { // если state не определено то значение по умолчанию - DISHES
    switch(action.type) {
        default:
            return state; //возвращается просто текущее состояние
    }
}