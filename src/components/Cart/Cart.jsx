import React from 'react';
import './Cart.css';
const Cart = (props) => {
    const {cart} = props;
    console.log(cart)
    let total = 0;
    for(const product of cart){
       total  = total + product.price;
    }

    let totalShipping = 0;
    for(const product of cart){
        totalShipping = totalShipping +product.shipping;
    }

    const tax = total*7/100;
    const grandTotal = total+totalShipping+tax;
    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price: {total}</p>
            <p>Total Shipping: {totalShipping}</p>
            <p>Tax: {tax.toFixed(2)}</p>
            <h5>Grand Total: {grandTotal}</h5>
        </div>
    );
};

export default Cart;