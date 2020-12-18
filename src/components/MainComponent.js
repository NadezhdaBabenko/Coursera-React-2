import React, { Component } from "react"; // создает компонент - потом его надо импортировать в App.js
import Home from './HomeComponent'; 
import Menu from './MenuComponent'; //импортируем каждый компонент, указывая путь до него и потом пишешь его в коду ниже как <Menu />  
import Dishdetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { DISHES } from '../shared/dishes'; 
import { Switch, Route, Redirect } from 'react-router-dom'; 

class Main extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
    //   selectedDish: null
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
render() {

    const HomePage = () => {
        return(
            <Home />
        );
    } 
    return (
        <div>
            <Header />
            <Switch>
                <Route path="/home" component={HomePage} />
                <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
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
