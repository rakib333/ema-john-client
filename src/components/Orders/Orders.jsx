// import React from 'react';
import './Orders.css'
import { useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";
import { useState } from 'react';
import { removeFromDb } from '../../utilities/fakedb';

const Orders = () => {
    const savedCart = useLoaderData();
    const [cart, setCart] = useState(savedCart);
    const handleDeleteCart = (id) => {
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining)
        removeFromDb(id)
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
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Orders;