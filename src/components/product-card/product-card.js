import Card from 'react-bootstrap/Card';
import "./product-card.css";
import { Link } from "react-router-dom";
import Ratings from 'react-ratings-declarative';


export default function ProductCard(props) {

   
    return (
        <Link to={`/details/${props.item.id}`}>
            <Card className="product-card" style={{ width: '18rem' }}>
                <Card.Img className="product-picture" variant="top" src={props.item.thumbnail} />
              
                <Card.Body className="description">
                        <Card.Title className="product-title">{props.item.title} </Card.Title>
                    <Ratings 
                        rating={props.item.rating}
                        widgetDimensions="15px"
                        widgetSpacings="3px"
                    >
                        <Ratings.Widget widgetRatedColor="black" />
                        <Ratings.Widget widgetRatedColor="black" />
                        <Ratings.Widget widgetRatedColor="black" />
                        <Ratings.Widget widgetRatedColor="black" />
                        <Ratings.Widget widgetRatedColor="black" />
                    </Ratings>
                       
                    <Card.Text className="product-price" >
                        ${props.item.price}
                     </Card.Text>
                </Card.Body>
            </Card>
        </Link>
    );
}
