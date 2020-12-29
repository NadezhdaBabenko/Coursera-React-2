import * as ActionTypes from './ActionTypes'; //import ALL ActionTypes

export const addComment = (dishId, rating, author, comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: { //это JS object, которая содержит разные части комментария
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
}); 