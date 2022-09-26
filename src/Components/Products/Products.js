import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import { addToLocalStore, getFromLocalStore } from '../LocalStorage/LocalStorage';
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
    // get data from localStorage
    useEffect(() => {
        const storedData = getFromLocalStore()
        const storedCart=[]
        for (let id in storedData) {
            const addedProduct = products.find(product => product.id === id)
            // console.log(addedProduct)
            if (addedProduct) {
                const quantity = storedData[id]
                addedProduct.quantity = quantity
                storedCart.push(addedProduct)
            }
            setCart(storedCart)
        }
    },[products])

    const handleCart = (product) => {
        const newCart = [...cart, product]
        setCart(newCart)
        addToLocalStore(product.id)
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
                    
                    <Cart cart={ cart} />
                </div>
            </div>
        </div>
    );
};

export default Products;