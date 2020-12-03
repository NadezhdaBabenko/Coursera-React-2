import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap'; //компоненты Навбар и НавбарБранд
import Menu from './components/MenuComponent'; //импортируем каждый компонент, указывая путь до него и потом пишешь его в коду ниже как <Menu />  
import './App.css';

function App() {
  return (
    <div>
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
        </div>
      </Navbar>
      <Menu /> 
    </div>
  );
}

export default App;
