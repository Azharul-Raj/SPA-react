import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css'


const Products = () => {
    const [products, setProducts] = useState([])
    // useState for order summery
    const [cart,setCart]=useState([])

    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data=>setProducts(data))
    }, [])
    const handleCart = (product) => {
        const newCart = [...cart, product]
        setCart(newCart)
    }

    return (
        <div>
            <div className="main-container">
                <div className="products-container">
                    {
                        products.map(product => <Product key={product.id} product={ product} handleCart ={handleCart}/>)
                    }
                </div>
                <div className="order-summery">
                    <h2>Order summery </h2>
                    <p>Selected Items :{cart.length} </p>
                </div>
            </div>
        </div>
    );
};

export default Products;