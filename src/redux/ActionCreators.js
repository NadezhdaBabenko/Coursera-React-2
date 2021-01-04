import * as ActionTypes from './ActionTypes'; //import ALL ActionTypes
import { DISHES } from '../shared/dishes'; 
import { baseUrl } from '../shared/baseUrl';

export const addComment = (dishId, rating, author, comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: { //это JS object, которая содержит разные части комментария
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
}); 
 
//DISHES
export const fetchDishes = () => (dispatch) => {// THUNK - выполняет 2 отправки 
    dispatch(dishesLoading(true)); //1 ф-ция

    return fetch(baseUrl + 'dishes') //взаимодействие с сервером
        .then(response => response.json())//преобразуем входящий ответ в json
        .then(dishes => dispatch(addDishes(dishes))); //когда получаем ДИШЕС - отправляем полученное в метод addDishes
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

//COMMENTS
export const fetchComments = () => (dispatch) => {    
    return fetch(baseUrl + 'comments')
    .then(response => response.json())
    .then(comments => dispatch(addComments(comments)));
};

export const commentsFailed = (errmess) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errmess
});

export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});

//PROMOS
export const fetchPromos = () => (dispatch) => {
    
    dispatch(promosLoading());

    return fetch(baseUrl + 'promotions')
    .then(response => response.json())
    .then(promos => dispatch(addPromos(promos)));
}

export const promosLoading = () => ({
    type: ActionTypes.PROMOS_LOADING
});

export const promosFailed = (errmess) => ({
    type: ActionTypes.PROMOS_FAILED,
    payload: errmess
});

export const addPromos = (promos) => ({
    type: ActionTypes.ADD_PROMOS,
    payload: promos
});