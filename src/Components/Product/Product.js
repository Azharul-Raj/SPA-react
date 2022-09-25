import React from 'react';
import './Product.css'

const Product = (props) => {
    const{name,category,seller,img,price,rating}=props.product
    return (
        <div className='product'>
            <img className='img' src={img} alt="" />
            
        </div>
    );
};

export default Product;