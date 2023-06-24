import './Header.css';
import logo from '../../images/Logo.svg';

const Header = () => {
    return (
        <nav className="container">
            <div className="header-container">
                <img src={logo} alt="" />
                <div className='menu'>
                    <a href="/home">Home</a>
                    <a href="/shop">Shop</a>
                    <a href="/inventory">Inventory</a>
                    <a href="/login">Login</a>
                </div>
            </div>
        </nav>
    );
};

export default Header;