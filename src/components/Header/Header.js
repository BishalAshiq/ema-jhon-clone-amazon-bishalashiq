import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png'
import './Header.css'
const Header = () => {
    return (
        <div className="header">
            <img className="logo" src={logo} alt=""/>
            
        <nav>
            <Link to="/shop">Shop</Link>
            <Link to="/review">Orders Review</Link>
            <Link to="/inventory">Manage Inventory</Link>
            <Link to="/login">Login</Link>
            
        </nav>
        </div>
    );
};

export default Header;