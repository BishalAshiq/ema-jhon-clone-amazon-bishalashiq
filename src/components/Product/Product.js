import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css'
import Rating from 'react-rating';

const Product = (props) => {
    // console.log(props);
    const {name, img, seller, price, stock, star} = props.product;
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className="product">
            <div>
               <img src={img} alt=""/>
            </div>
            <div>
                <h4 className="product-name">{name}</h4>
                <p><small>by: {seller}</small></p>
                <p>$ {price}</p>
                <p><small>only {stock} left in stock - order soon</small></p>
                <Rating 
                emptySymbol="far fa-star icon-color"
                fullSymbol="fas fa-star icon-color"
                initialRating={star}
                readonly></Rating>
                <br/>
                <button onClick={() => props.handleAddToCart(props.product)} 
                 className="btn-regular">{cartIcon} Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;