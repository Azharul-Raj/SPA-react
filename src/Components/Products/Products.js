import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css'


const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
        .then(data=>setProducts(data))
    }, [])
    const handleCart = (product) => {
        console.log(product)
    }

    return (
        <div>
            <h2>TOTAL PRODUCTS : { products.length}</h2>
            <div className="main-container">
                <div className="products-container">
                    {
                        products.map(product => <Product key={product.id} product={ product} handleCart ={handleCart}/>)
                    }
                </div>
                <div className="order-summery">
                    <h2>Order summery here </h2>
                </div>
            </div>
        </div>
    );
};

export default Products;