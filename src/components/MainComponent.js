import React, { Component } from "react"; // создает компонент - потом его надо импортировать в App.js
import Home from './HomeComponent'; 
import About from './AboutComponent';
import Menu from './MenuComponent'; //импортируем каждый компонент, указывая путь до него и потом пишешь его в коду ниже как <Menu />  
import Contact from './ContactComponent';
import Dishdetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';  //для роутинга 
import { connect } from 'react-redux';
import { postComment, fetchDishes, fetchComments, fetchPromos } from '../redux/ActionCreators';
import { actions } from 'react-redux-form';
import { TransitionGroup, CSSTransition } from 'react-transition-group'; //анимация

const mapStateToProps = state => { //доступны в моем Redux Store здесь. это состояние, которое я здесь получаю, является состоянием из моего Redux Store. 
    return { //все состояния передаешь теперь как this.props
        dishes: state.dishes,
        comments: state.comments,
        promotions: state. promotions, 
        leaders: state.leaders //доступны сейчас как PROPS в MainCmp
    }
}

const mapDispatchToProps = (dispatch) => ({
    postComment: (dishId, rating, author, comment) => dispatch(postComment(dishId, rating, author, comment)), 
    fetchDishes: () => {dispatch(fetchDishes())},
    resetFeedbackForm: () => {dispatch(actions.reset('feedback'))}, //обновляет инпуты формы после отправки отзыва
    fetchComments: () => {dispatch(fetchComments())},
    fetchPromos: () => {dispatch(fetchPromos())},
});

class Main extends Component {
  
    constructor(props) {
        super(props);

        // this.state = {
            // перенесено в reducer.js для отслеживания изменения состояния
        // };
    }

    componentDidMount() {// как компонент будет установлен, будет вызван метод fetchDishes() - получение все с сервера
        this.props.fetchDishes();
        this.props.fetchComments();
        this.props.fetchPromos();
    }

//onClick={() => this.onDishSelect(dish)} при клике на каждую карточку вызывается ф-ция
    // onDishSelect(dishId) {
    //     this.setState({ selectedDish: dishId }); //меняем состояние
    // }

//<Menu dishes={this.state.dishes}/> -> dishes={this.state.dishes} - это props

//  <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />  
//  <Dishdetail state={this.state} dish={this.state.dishes.find((dish) => dish.id === this.state.selectedDish)} /> 
// <Switch> - для переключения - роутинг
//<Home dish={this.state.dishes.filter((dish) => dish.featured)[0]} /> - для всех dishes у кого featured = true - выделятся эти только -> [0]-толкьо первый эемент
    render() {

        const HomePage = () => {
            return(
                <Home 
                    dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
                    dishesLoading={this.props.dishes.isLoading}
                    dishErrMess={this.props.dishes.errMess}
                    promotion={this.props.promotions.promotions.filter((promo) => promo.featured)[0]}
                    promoLoading={this.props.promotions.isLoading}
                    promoErrMess={this.props.promotions.errMess}
                    leader={this.props.leaders.filter((leader) => leader.featured)[0]}
                />
            );
        } 

        const DishWihtId = ({match}) =>{
            return(
                <Dishdetail dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
                    isLoading={this.props.dishes.isLoading}
                    errMess={this.props.dishes.errMess}
                    comments={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
                    commentsErrMess={this.props.comments.errMess}
                    postComment={this.props.postComment}
                />
            );
        }

        return (
            <div>
                <Header />
                <TransitionGroup>
                    <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
                        <Switch>
                            <Route path="/home" component={HomePage} />
                            <Route path="/aboutus" component={() => <About leaders={this.props.leaders} />} />
                            <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes} />} />
                            <Route path="/menu/:dishId" component={DishWihtId} />
                            <Route exact path="/contactus" component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm}/>} />
                            <Redirect to="/home" /> 
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
                <Footer />
            </div>
        );
    } 
    }

// <Switch> - переключение между страницами
// <Route path="/home" component={HomePage} /> - добавляется в юрл путь - и переключается на компонент Хоум
// <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} /> - добавляется в юрл точный путь Меню и отпрывается компонент <Menu + плюс состояние передается тоже тут/>
// <Redirect to="/home" /> //если выбирается что то другое- чего нет оно перенаправляет на страницу Хоум (вкладки меню которых еще нет)
// </Switch> 

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));

