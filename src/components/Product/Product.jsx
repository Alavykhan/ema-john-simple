import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const {img, name, seller, rating, price } = props.product;
    const handleAddToCart = props.handleAddToCart;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-details'>
            <h6 className='product-name'>{name}</h6>
            <p><b>Price: ${price}</b></p>
            <p>Manufacturer: {seller}</p>
            <p>Rating: {rating}</p>
            </div>
            <button onClick={()=>handleAddToCart(props.product)} className='addToCart'>Add to Cart
             <FontAwesomeIcon icon={faShoppingCart} />
            </button>
        </div>
    );
};

export default Product;