import React, { Component } from "react"; // создает компонент - потом его надо импортировать в App.js
import Main from './components/MainComponent'; //импортируем каждый компонент, указывая путь до него и потом пишешь его в коду ниже как <Menu />  
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'; //позволяет мне настроить мое приложение React так, чтобы  Redux Store был доступным для всех компонентов моего приложения.
import { ConfigureStore } from './redux/configureStore';

const store = ConfigureStore();

class App extends Component {

    render() {
        return (
            <Provider store={store}>
                  <BrowserRouter>
                      <div>
                        <Main /> 
                      </div>
                  </BrowserRouter>
            </Provider>
        );
    } 
}

export default App;
