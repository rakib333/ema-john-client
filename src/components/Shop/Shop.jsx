import { useState } from 'react';
import './Shop.css'
import { useEffect } from 'react';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    useEffect(() => {
        const storedCart = getShoppingCart();
        let savedCart = [];
        for (const id in storedCart) {
            const addedProduct = products.find(product => product.id === id);

            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct)
            }

        }
        setCart(savedCart)
    }, [products])


    const handleAddToCart = product => {
        let newCart = [...cart, product];
        setCart(newCart)
        addToDb(product.id)
    }
    const handleClearCart = () => {
        setCart([])
        deleteShoppingCart()
    }

    return (
        <div className="shop-container">
            <div className="products-container">
                <h3>All products</h3>
                <div className="products">
                    {
                        products.map(product => <Product
                            key={product.id}
                            product={product}
                            handleAddToCart={handleAddToCart}
                        ></Product>)
                    }
                </div>
            </div>
            <div className="cart-container">
                <Cart handleClearCart={handleClearCart} cart={cart}>
                    <Link to='/orders'><button className='proceed-orders'>
                        <span style={{ marginRight: '10px' }}>Proceed Orders</span>
                        <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                    </button></Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;