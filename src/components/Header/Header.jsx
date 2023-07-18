import './Header.css';
import logo from '../../images/Logo.svg';
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {
    return (
        <nav className="container">
            <div className="header-container">
                <img src={logo} alt="" />
                <div className='menu'>
                    <ActiveLink to="/">Shop</ActiveLink>
                    <ActiveLink to="/orders">Orders</ActiveLink>
                    <ActiveLink to="/inventory">Inventory</ActiveLink>
                    <ActiveLink to="/login">Login</ActiveLink>
                </div>
            </div>
        </nav>
    );
};

export default Header;