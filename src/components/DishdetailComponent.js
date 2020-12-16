import React from "react"; // создает компонент - потом его надо импортировать в App.js
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap"; 

    //отрисовываем и как параметр принимаем state из род. кмп
    function RenderDish({dish}) {
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

    function FillComments({dish}) {
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

    function RenderComments({dish}) {
        if(dish != null) {
            return (
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    <ul className="pl-0" style={{ listStyleType: "none" }}>
                        <FillComments dish={dish}/>
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

    const Dishdetail = (props) => { // любой компонент должен содержать метод Рэндэр - отрисовывает, отображает этот компонент  
        return (
            <div className="container">
                <div className="row"> 
                    <RenderDish dish={props.dish} />
                    <RenderComments dish={props.dish} />
                </div>
            </div>
        );
    }
    
export default Dishdetail;