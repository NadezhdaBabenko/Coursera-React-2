import React, { Component } from "react"; // создает компонент - потом его надо импортировать в App.js
import { Navbar, NavbarBrand } from 'reactstrap'; //компоненты Навбар и НавбарБранд
import Menu from './MenuComponent'; //импортируем каждый компонент, указывая путь до него и потом пишешь его в коду ниже как <Menu />  
import Dishdetail from './DishdetailComponent';
import {DISHES} from '../shared/dishes'; 

class Main extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
      selectedDish: null
    };
  }

//onClick={() => this.onDishSelect(dish)} при клике на каждую карточку вызывается ф-ция
    onDishSelect(dishId) {
        this.setState({ selectedDish: dishId }); //меняем состояние
    }
//<Menu dishes={this.state.dishes}/> -> dishes={this.state.dishes} - это props
    render() {
    return (
        <div>
            <Navbar dark color="primary">
                <div className="container">
                    <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
                </div>
            </Navbar>
            <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} /> 
            <Dishdetail state={this.state} dish={this.state.dishes.find((dish) => dish.id === this.state.selectedDish)} />
        </div>
    );
} 
}

export default Main;
