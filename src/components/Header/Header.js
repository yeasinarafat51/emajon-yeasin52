import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/Usercontext';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    const {user, logOut} = useContext(AuthContext)
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>
               {
                user?.uid ?
                <button className='btn-logout' onClick={logOut}>Log out</button>
                :
                <>
                <Link to="/login">Log In</Link>
                <Link to="/singup">Sing up</Link></>}
               
               
                <span>{user?.email}</span>

            </div>
        </nav>
    );
};

export default Header;