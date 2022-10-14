import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./product-details.css";
import Ratings from 'react-ratings-declarative';



export default function ProductDetails() {
    const params = useParams();
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [item, setItem] = useState([]);

    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then(res => res.json())
            .then(({ products }) => products.find((item) => Number(item.id) === Number(params.id) ))
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItem(result);
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [params.id])

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="spinner-border" role="status">
                <span className="sr-only"></span>
            </div>
        </div>
    } else {
        return (
            
           <div> 
                <div className="description-header">
                    <p className="header-text">{item.title}</p>
                </div>
                
                <div className="description-container">
                    <div className="picture-container" >
                        <img className="description-picture"  src={item.thumbnail} alt="" />
                    </div>
                    
                    <div className="section-container">
                        <div className="mini-section-container">
                            <p className="title-description">{item.title}</p>
                            <p className="star-description"><Ratings
                                rating={item.rating}
                                widgetDimensions="15px"
                                widgetSpacings="3px"
                            >
                                <Ratings.Widget widgetRatedColor="black" />
                                <Ratings.Widget widgetRatedColor="black" />
                                <Ratings.Widget widgetRatedColor="black" />
                                <Ratings.Widget widgetRatedColor="black" />
                                <Ratings.Widget widgetRatedColor="black" />
                            </Ratings>
                             </p>
                        </div>

                        <ul className="description-list">
                            <li className="description-item"><span className="bold-title">Brands: </span>{item.brand}</li>
                            <li className="description-item"><span className="bold-title">Category: </span> {item.category}</li>
                            <li className="description-item"><span className="bold-title">In Stock: </span> {item.stock}</li>
                            <li className="description-item"><span className="bold-title">Description: </span>{item.description}</li>
                        </ul>
                        
                        <div className="price-container">
                            <p className="description-item"><span className="bold-title">Price: </span> ${item.price}</p>
                        </div>
                    </div>
                </div>   
           </div>
        );
    }
}
