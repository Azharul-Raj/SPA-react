import React from 'react';
import './Product.css'

const Product = (props) => {
    const{name,category,seller,img,price,ratings}=props.product
    return (
        <div className='product'>
            <img className='img' src={img} alt="" />
            <div className="details">
                <h4>{name}</h4>
                <h5>Price : {price}</h5>
                <p><small>Category : {category}</small></p>
                <p><small>Rating: {ratings}</small></p>
            </div>
            <button className='cart-btn'>
                <p>Add To Cart</p>
            </button>
        </div>
    );
};

export default Product;