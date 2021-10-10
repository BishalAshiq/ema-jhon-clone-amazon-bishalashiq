import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '../../images/logo.png'
import './Header.css'
const Header = () => {
    const { user, logOut } = useAuth();
    
    return (
        <div className="header">
            <img className="logo" src={logo} alt=""/>
            
        <nav>
            <Link to="/shop">Shop</Link>
            <Link to="/review">Orders Review</Link>
            <Link to="/inventory">Manage Inventory</Link>
            {
                user.email ?
                <button onClick={logOut}>Log Out</button>
                :
                <NavLink to="/login">Login</NavLink>
            }
            
        </nav>
        </div>
    );
};

export default Header;