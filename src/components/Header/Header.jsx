import './Header.css';
import logo from '../../images/Logo.svg';
import ActiveLink from '../ActiveLink/ActiveLink';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProviders';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleSignOut = () => {
        logOut()
            .then(() => {
                alert('log out successful')
                navigate('/')
            })
            .catch(error => {
                console.log(error)
            })
    }



    return (
        <nav className="container">
            <div className="header-container">
                <img src={logo} alt="" />
                <div className='menu'>
                    <ActiveLink to="/">Shop</ActiveLink>
                    <ActiveLink to="/orders">Orders</ActiveLink>
                    <ActiveLink to="/inventory">Inventory</ActiveLink>
                    <ActiveLink to="/login">Login</ActiveLink>
                    <ActiveLink to="/signup">Sign Up</ActiveLink>
                    {user &&
                        <span >{user.email} <button className='btn-logOut' onClick={handleSignOut}>Sign Out</button></span>}
                </div>
            </div>
        </nav>
    );
};

export default Header;