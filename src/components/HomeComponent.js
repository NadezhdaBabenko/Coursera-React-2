import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
//{item.designation ? <CardSubtitle>{item.designation}</CardSubtitle>: null} - если item.designation не равно null - то нарисуй <CardSubtitle> - так как designation есть не у всех объектов, если нет designation у объекта - то null
import { Loading } from './LoadingComponent';

function RenderCard({item, isLoading, errMess}) {//берет из MainComponent
    if (isLoading) {
        return(
            <Loading />
        );
    }
    else if (errMess) {
        return(
            <h4>{errMess}</h4>
        );
    }
    else 
        return(
            <Card>
                <CardImg src={item.image} alt={item.name} />
                <CardBody>
                    <CardTitle>{item.name}</CardTitle>
                    {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle>: null}
                    <CardText>{item.description}</CardText>
                </CardBody>
            </Card>
        );
} 
// isLoading={props.dishesLoading}  и errMess={props.dishesErrMess} берет из MainComponent
function Home(props) {
    return(
        <div className="container">
            <div className="row align-items-start">
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.dish} 
                        isLoading={props.dishesLoading} 
                        errMess={props.dishesErrMess} /> 
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.promotion} />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.leader} />
                </div>
            </div>
        </div>
    );
}

export default Home;