import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Cart.css'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const Cart = ({ cart, handleClearCart, children }) => {

    let totalPrice = 0;
    let totalShipping = 0;
    let quantity = 0;

    for (const product of cart) {
        if (product.quantity === 0) {
            product.quantity = 1;
        }
        totalPrice = totalPrice + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping;
        quantity = quantity + product.quantity;
    }

    const tax = totalPrice * 7 / 100;
    const grandTotal = totalPrice + totalShipping + tax;

    return (
        <div className="cart">
            <h2>Order summery</h2>
            <p>Selected items : {quantity}</p>
            <p>Total Price: ${totalPrice}</p>
            <p>Shipping: ${totalShipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h3>Grand Total: ${grandTotal.toFixed(2)} </h3>

            <button onClick={handleClearCart} className='btn-clear'>
                <span>Clear cart</span>
                <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
            </button>
            {children}
        </div>
    );
};

export default Cart;