// import React from 'react';
import './Orders.css'
import { Link, useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";
import { useState } from 'react';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Orders = () => {
    const savedCart = useLoaderData();
    const [cart, setCart] = useState(savedCart);
    const handleDeleteCart = (id) => {
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining)
        removeFromDb(id)
    }

    const handleClearCart = () => {
        setCart([])
        deleteShoppingCart()
    }

    return (
        <div className="shop-container">
            <div className="review-container">
                {
                    cart.map(pd => <ReviewItem
                        key={pd.id}
                        product={pd}
                        handleDeleteCart={handleDeleteCart}
                    ></ReviewItem>)
                }
            </div>
            <div className="cart-orders-container">
                <Cart
                    cart={cart}
                    handleClearCart={handleClearCart}
                >
                    <Link to='/checkout'>
                        <button className='proceed-checkout'>
                            <span style={{ marginRight: '10px' }}>Proceed Checkout</span>
                            <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                        </button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;