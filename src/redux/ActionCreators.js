import * as ActionTypes from './ActionTypes'; //import ALL ActionTypes
import { DISHES } from '../shared/dishes'; 
import { baseUrl } from '../shared/baseUrl';

export const addComment = (comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: comment
}); 

export const postComment = (dishId, rating, author, comment) => (dispatch) => {
    const newComment = { //создается коммент
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
    newComment.date = new Date().toISOString();

    return fetch(baseUrl + 'comments', {//что б отправить коммент на сервер
        method: 'POST',
        body: JSON.stringify(newComment), //созданный коммент помещается в тело сообщения отправки
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'same-origin'
    })

    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
        var errmess = new Error(error.message);
        throw errmess;
      })
    .then(response => response.json())
    .then(response => dispatch(addComment(response)))
    .catch(error =>  { console.log('post comments', error.message); 
        alert('Your comment could not be posted\nError: '+error.message); });
};
 
//DISHES
export const fetchDishes = () => (dispatch) => {// THUNK - выполняет 2 отправки PROMISE
    dispatch(dishesLoading(true)); //1 ф-ция

    return fetch(baseUrl + 'dishes') //взаимодействие с сервером PROMISE
        .then(response => {//обработка ошибок #1 когда вы получаете ответ от сервера, но ответ может быть ошибкой с сервера
            if(response.ok) {// если с ответом все ок, то отправляешь его дальше (преобразование в json)
                return response;
            }
            else {//если есть ошибки, то ..
                var error = new Error('Error ' + response.status + ' : ' + response.statusText);//создаем новый объект ошибки. status - код ошибки, statusText - описание ошибки  
                error.response = response;
                throw error;
            }
        }, 
        error => { //обработчик ошибок #2 когда нет связи с сервером
            var errmess = new Error(error.message);
            throw errmess;
        })
        .then(response => response.json())//преобразуем входящий ответ в json
        .then(dishes => dispatch(addDishes(dishes)))//когда получаем ДИШЕС - отправляем полученное в метод addDishes
        .catch(error => dispatch(dishesFailed(error.message))); //отправим пойманную ошибку в метод  dishesFailed
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
        .then(response => {
            if (response.ok) {
            return response;
            } else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
            }
        },
        error => {
                var errmess = new Error(error.message);
                throw errmess;
        })
        .then(response => response.json())
        .then(comments => dispatch(addComments(comments)))
        .catch(error => dispatch(commentsFailed(error.message)));
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
        .then(response => {
            if (response.ok) {
            return response;
            } else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
            }
        },
        error => {
                var errmess = new Error(error.message);
                throw errmess;
        })
        .then(response => response.json())
        .then(promos => dispatch(addPromos(promos)))
        .catch(error => dispatch(promosFailed(error.message)));
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

//LEADERS
export const fetchLeaders = () => (dispatch) => {
    
    dispatch(leadersLoading());

    return fetch(baseUrl + 'leaders')
        .then(response => {
            if (response.ok) {
            return response;
            } else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
            }
        },
        error => {
                var errmess = new Error(error.message);
                throw errmess;
        })
        .then(response => response.json())
        .then(leaders => dispatch(addLeaders(leaders)))
        .catch(error => dispatch(leadersFailed(error.message)));
}

export const leadersLoading = () => ({
    type: ActionTypes.LEADERS_LOADING
});

export const leadersFailed = (errmess) => ({
    type: ActionTypes.LEADERS_FAILED,
    payload: errmess
});

export const addLeaders = (leaders) => ({
    type: ActionTypes.ADD_LEADERS,
    payload: leaders
});

//postFeedback
export const addFeedback = (feedback) => ({
    type: ActionTypes.ADD_FEEDBACK,
    payload: feedback
}); 

export const postFeedback = (firstname, lastname, telnum, email, agree, contactType, message) => (dispatch) => {
    const newFeedback = { //создается коммент
        firstname: firstname,
        lastname: lastname,
        telnum: telnum,
        email: email,
        agree: agree,
        contactType: contactType,
        message: message
    }
    newFeedback.date = new Date().toISOString();

    return fetch(baseUrl + 'feedback', {//что б отправить коммент на сервер
        method: 'POST',
        body: JSON.stringify(newFeedback), //созданный коммент помещается в тело сообщения отправки
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'same-origin'
    })

    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
        var errmess = new Error(error.message);
        throw errmess;
      })
    .then(response => response.json())
    .then(response => dispatch(addFeedback(response)))
    .catch(error =>  { console.log('post feedback', error.message); 
        alert('Your feedback could not be posted\nError: '+error.message); });
};

//FEEDBACKS
export const fetchFeedbacks = () => (dispatch) => {    
    return fetch(baseUrl + 'feedback')
        .then(response => {
            if (response.ok) {
            return response;
            } else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
            }
        },
        error => {
                var errmess = new Error(error.message);
                throw errmess;
        })
        .then(response => response.json())
        .then(feedbacks => dispatch(addFeedbacks(feedbacks)))
        .catch(error => dispatch(feedbacksFailed(error.message)));
};

export const feedbacksFailed = (errmess) => ({
    type: ActionTypes.FEEDBACKS_FAILED,
    payload: errmess
});

export const addFeedbacks = (feedbacks) => ({
    type: ActionTypes.ADD_FEEDBACKS,
    payload: feedbacks
});