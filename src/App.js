import React, { Component } from "react"; // создает компонент - потом его надо импортировать в App.js
import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap'; //компоненты Навбар и НавбарБранд
import Menu from './components/MenuComponent'; //импортируем каждый компонент, указывая путь до него и потом пишешь его в коду ниже как <Menu />  
import './App.css';
import {DISHES} from './shared/dishes'; 

class App extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES
    };
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
        <Menu dishes={this.state.dishes}/> 
      </div>
    );
  } 
}

export default App;
