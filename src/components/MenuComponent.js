import React from "react"; // создает компонент - потом его надо импортировать в App.js
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from "reactstrap"; // импортировать медиа-компонент из reactstrap <Media> котороые мы использвем

// import {DISHES} from '../shared/dishes'; 

function RenderMenuItem({ dish, onClick }) { //1вариант написания функционального компонента
    return (
        <Card onClick={() => onClick(dish.id)}> 
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardImgOverlay>
                <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
        </Card>
    );
}

const Menu = (props) => { //2 вариант написания функционального компонента
    
    const menu = props.dishes.map((dish) => { // прохожу по всему массиву dishes и итерации по каждому dish и отрисовывает элемент
        return (//читай документацию reactstrap про <Media tag="li">; важно прописывать key={dish.id} для каждого элемента массива
            <div key={dish.id} className="col-12 col-md-5 m-1"> 
                <RenderMenuItem dish={dish} onClick={props.onClick}/>
            </div>
        );
    }); //Я собираюсь включить переменную JavaScript под названием {menu}, которая определяется как массив - дальше метод .map -пробегает по всем элементам массива. дальше определяется что вернется после этого метода
    //<Dishdetail data={this.state}/>  - передаешь в дочерний компонент state текущий
    
    return ( // выводишь каждый элемент const menu
        <div className="container"> 
            <div className="row">
                {menu} 
            </div>
        </div>
    );
} 

// {/* <Dishdetail data={this.state}/>  */}
export default Menu; //не забудьте экспортировать этот компонент из этого файла, потому что нам нужно будет импортировать этот компонент везде, где мы хотим использовать его в нашем приложении.
