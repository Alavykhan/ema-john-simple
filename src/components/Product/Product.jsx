import React from 'react';
import './Product.css';
const Product = (props) => {
    const {img, name, seller, rating, price } = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-details'>
            <h6 className='product-name'>{name}</h6>
            <p><b>Price: ${price}</b></p>
            <p>Manufacturer: {seller}</p>
            <p>Rating: {rating}</p>
            </div>
            <button className='addToCart'>Add to Cart</button>
        </div>
    );
};

export default Product;