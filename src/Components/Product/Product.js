import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Product.css'

const Product = ({product,handleCart}) => {
    const{name,category,seller,img,price,ratings}=product
    return (
        <div className='product'>
            <img className='img' src={img} alt="" />
            <div className="details">
                <h4>{name.length>30?name.slice(0,25)+'...':name}</h4>
                <h5>Price : {price}$</h5>
                <p><small>Category : {category}</small></p>
                <p><small>Rating: {ratings}</small></p>
            </div>
            <button onClick={()=>handleCart(product)} className='cart-btn'>
                <p className='cart-text'>Add To Cart</p>
                <i class="fa-solid fa-cart-plus"></i>
                {/* <FontAwesomeIcon icon={faShoppingCart} /> */}
            </button>
        </div>
    );
};

export default Product;