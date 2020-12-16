import React, { Component } from "react"; // создает компонент - потом его надо импортировать в App.js
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap"; 

class Dishdetail extends Component {

    constructor(props) {
        super(props); //это требуется всякий раз, когда вы определяете компонент класса
        // состояние state для моего компонента - хранит в себе свойства, относящиеся к этому компоненту, которые мы можем использовать.
        this.state = {
            // принимаешь state из родительского компонента
            //https://www.pluralsight.com/guides/how-to-send-state-of-current-component-as-a-parameter-to-another-external-method-using-react
        }
    }

    //отрисовываем и как параметр принимаем state из род. кмп
    renderDish(dish) {
        if(dish != null) {
            return (
                <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>
                            {dish.description}
                        </CardText>
                    </CardBody>
                </Card>
                </div>
            );
        } 
        else {
            return (
                <div></div> //ничего не отрисуется на экране
            )
        }
    }

    fillComments = (dish) => {
        let commentsArr = [];
        for(let i = 0; i < dish.comments.length; i++) {
            let comment = dish.comments[i].comment;
            commentsArr.push(<li className="mb-4 mt-4" key={dish.name + comment + i}>{comment}</li>);
            let author = dish.comments[i].author;
            let date = new Date(dish.comments[i].date);
            commentsArr.push(<li className="mb-4 mt-4" key={dish.name + author + i}>-- {author}, {date.toDateString()}</li>);
        }
        return commentsArr;
    }

    renderComments(dish) {
        if(dish != null) {
            return (
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    <ul className="pl-0" style={{ listStyleType: "none" }}>
                        {this.fillComments(dish)}
                    </ul>
                </div>
            );
        } 
        else {
            return (
                <div></div> //ничего не отрисуется на экране
            )
        }


    }

    render() { // любой компонент должен содержать метод Рэндэр - отрисовывает, отображает этот компонент  
        return (
            <div className="container">
                <div className="row"> 
                    {this.renderDish(this.props.dish)}
                    {this.renderComments(this.props.dish)} 
                </div>
            </div>
        );
    }
    
}

export default Dishdetail;