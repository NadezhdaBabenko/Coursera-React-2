import React, { Component } from "react"; // создает компонент - потом его надо импортировать в App.js
import Main from './components/MainComponent'; //импортируем каждый компонент, указывая путь до него и потом пишешь его в коду ниже как <Menu />  
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Main /> 
      </div>
    );
  } 
}

export default App;
