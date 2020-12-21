import React, { Component } from "react"; // создает компонент - потом его надо импортировать в App.js
import Home from './HomeComponent'; 
import About from './AboutComponent';
import Menu from './MenuComponent'; //импортируем каждый компонент, указывая путь до него и потом пишешь его в коду ниже как <Menu />  
import Contact from './ContactComponent';
import Dishdetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { DISHES } from '../shared/dishes'; 
import { COMMENTS } from '../shared/comments';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions'; 

import { Switch, Route, Redirect } from 'react-router-dom';  //для роутинга 

class Main extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
        dishes: DISHES,
        comments: COMMENTS,
        promotions: PROMOTIONS,
        leaders: LEADERS
    };
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
            <Home dish={this.state.dishes.filter((dish) => dish.featured)[0]}//передает состояние (state) dishes - фильтрует и берет тот объект у которого у первого встречается ключ featured как true ---> дальше передает в HomeCmp как входящий параметр <RenderCard item={props.dish}
                promotion={this.state.promotions.filter((promo) => promo.featured)[0]} //передает состояние (state) promotion - фильтрует и берет тот объект у которого у первого встречается ключ featured как true ---> дальше передает в HomeCmp как входящий параметр <RenderCard item={props.promotion}
                leader={this.state.leaders.filter((leader) => leader.featured)[0]} //передает состояние (state) leaders - фильтрует и берет тот объект у которого у первого встречается ключ featured как true ---> дальше передает в HomeCmp как входящий параметр <RenderCard item={props.leader}
            />
        );
    } 

    const DishWihtId = ({match}) =>{
        return(
            <Dishdetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} //выберет первый элемент с таким id
            comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} /> // выделит все комменты которые подходят
        );
    }

    return (
        <div>
            <Header />
            <Switch>
                <Route path="/home" component={HomePage} />
                <Route path="/aboutus" component={() => <About leaders={this.state.leaders} />} />
                <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} />} />
                <Route path="/menu/:dishId" component={DishWihtId} />
                <Route exact path="/contactus" component={Contact} />
                <Redirect to="/home" /> 
            </Switch>
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

export default Main;
