import React from 'react';
import './Product.css'

const Product = ({product,handleCart}) => {
    const{name,category,seller,img,price,ratings}=product
    return (
        <div className='product'>
            <img className='img' src={img} alt="" />
            <div className="details">
                <h4>{name}</h4>
                <h5>Price : {price}</h5>
                <p><small>Category : {category}</small></p>
                <p><small>Rating: {ratings}</small></p>
            </div>
            <button onClick={()=>handleCart(product)} className='cart-btn'>
                <p>Add To Cart</p>
            </button>
        </div>
    );
};

export default Product;