import * as ActionTypes from './ActionTypes'; //import ALL ActionTypes
import { DISHES } from '../shared/dishes'; 

export const addComment = (dishId, rating, author, comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: { //это JS object, которая содержит разные части комментария
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
}); 
 
export const fetchDishes = () => (dispatch) => {// THUNK - выполняет 2 отправки 
    dispatch(dishesLoading(true)); //1 ф-ция

    setTimeout(() => {
        dispatch(addDishes(DISHES));//2 ф-ция через 2 сек
    }, 2000);
}

export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING
});

export const dishesFailed = (errmess) => ({
    type: ActionTypes.DISHES_FAILED,
    poyload: errmess
});

export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
});
