import React from 'react';
import './Cart.css'



const Cart = ({ cart }) => {
    const totalPrice = cart.reduce((acc, curr) => {
        acc += curr.price
        return acc
    }, 0)
    const totalShipping = cart.reduce((acc, curr) => {
        acc += curr.shipping
        return acc
    }, 0)
    const totalTax = ((totalPrice + totalShipping) * .1).toFixed(2)
    const grandTotal = totalPrice + totalShipping + parseFloat(totalTax)

    return (
        <div className='order-details'>
            <h2>Order summery </h2>
            <p>Selected Item : {cart.length}</p>
            <p>Total Price: {totalPrice}$</p>
            <p>Total Shipping : {totalShipping}$</p>
            <p>Total Tax : { totalTax}$</p>
            <h3>Grand Total : { grandTotal}$</h3>
        </div>
    );
};

export default Cart;