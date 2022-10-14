import { useState, useEffect } from "react";
import ProductCard from "../product-card/product-card";
import "./store.css"
import filterSearch  from "../store/store.helper"




export default function StoreComponent(props) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

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
                <ul>
                    {filterSearch(items, props.filter).map(item => (
                        <li key={item.id}>
                            <ProductCard item={item} />
                        </li>
                        
                    ))}
                </ul>
            </div>
        );
    }
}

