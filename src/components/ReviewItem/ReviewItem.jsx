// import React from 'react';
import './ReviewItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const ReviewItem = ({ product, handleDeleteCart }) => {
    const { id, img, price, name, quantity } = product;
    return (
        <div className="review-items">
            <img src={img} alt="" />

            <div className='review-details'>
                <h2>{name}</h2>
                <p>Price: <span className="item-price">${price}</span></p>
                <p>Order Quantity: <span className="item-price">{quantity}</span></p>
            </div>

            <button onClick={() => handleDeleteCart(id)} className='btn-delete'><FontAwesomeIcon icon={faTrashAlt} /></button>
        </div>
    );
};

export default ReviewItem;