import { useState } from 'react';
import './Shop.css'
import { useEffect } from 'react';
import Product from '../Product/Product';

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div className="shop-container">
            <div className="products-container">
                <h3>All products</h3>
                <div className="products">
                    {
                        products.map(product => <Product
                            key={product.id}
                            product={product}
                        ></Product>)
                    }
                </div>
            </div>
            <div className="cart-container">
                <h2>Order summery</h2>
            </div>
        </div>
    );
};

export default Shop;