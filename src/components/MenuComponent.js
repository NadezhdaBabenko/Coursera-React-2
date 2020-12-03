import React, { Component } from "react"; // создает компонент - потом его надо импортировать в App.js
import { Media } from "reactstrap"; // импортировать медиа-компонент из reactstrap <Media> котороые мы использвем

class Menu extends Component { //добавляет новый компонент в приложение реакт - Menu - имя компонента

    constructor(props) {
        super(props); //это требуется всякий раз, когда вы определяете компонент класса
        // состояние state для моего компонента - хранит в себе свойства, относящиеся к этому компоненту, которые мы можем использовать.
        this.state = {
            dishes: [ //свойство
                {
                  id: 0, // объект JS
                  name:'Uthappizza',
                  image: 'assets/images/uthappizza.png',
                  category: 'mains',
                  label:'Hot',
                  price:'4.99',
                  description:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.'                        },
               {
                  id: 1,
                  name:'Zucchipakoda',
                  image: 'assets/images/zucchipakoda.png',
                  category: 'appetizer',
                  label:'',
                  price:'1.99',
                  description:'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce'                        },
               {
                  id: 2,
                  name:'Vadonut',
                  image: 'assets/images/vadonut.png',
                  category: 'appetizer',
                  label:'New',
                  price:'1.99',
                  description:'A quintessential ConFusion experience, is it a vada or is it a donut?'                        },
               {
                  id: 3,
                  name:'ElaiCheese Cake',
                  image: 'assets/images/elaicheesecake.png',
                  category: 'dessert',
                  label:'',
                  price:'2.99',
                  description:'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms'                        }
               ],
        }
    }

    render() { // любой компонент должен содержать метод Рэндэр - отрисовывает, отображает этот компонент
        const menu = this.state.dishes.map((dish) => { // прохожу по всему массиву dishes и итерации по каждому dish и отрисовывает элемент
            return (//читай документацию reactstrap про <Media tag="li"> 
                <div key={dish.id} className="col-12 mt-5">
                    <Media tag="li"> 
                        <Media left middle>
                            <Media object src={dish.image} alt={dish.name} />
                        </Media>
                        <Media body className="ml-5">
                            <Media heading>{dish.name}</Media>
                            <p>{dish.description}</p>
                        </Media>
                    </Media>
                </div>
            );
        }); //Я собираюсь включить переменную JavaScript под названием {menu}, которая определяется как массив - дальше метод .map -пробегает по всем элементам массива. дальше определяется что вернется после этого метода
        
        return ( // выводишь каждый элемент const menu
            <div className="container"> 
                <div className="row">
                    <Media list> 
                        {menu} 
                    </Media> 
                </div>
            </div>
        );
    }
}

export default Menu; //не забудьте экспортировать этот компонент из этого файла, потому что нам нужно будет импортировать этот компонент везде, где мы хотим использовать его в нашем приложении.
