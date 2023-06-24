import './Product.css'

const Product = ({ product, handleAddToCart }) => {
    const { name, seller, price, ratings, img } = product;
    return (
        <div className="product">
            <img src={img} alt="" />
            <div className="product-info">
                <h2>{name}</h2>
                <p>Price: ${price}</p>
                <p>Manufacturer: {seller}</p>
                <p><small>Rating: {ratings} stars</small></p>
            </div>
            <button onClick={() => handleAddToCart(product)} className='btn-cart'>Add to cart</button>
        </div>
    );
};

export default Product;