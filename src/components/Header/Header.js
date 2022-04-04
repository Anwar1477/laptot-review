import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='header'>
            <h3>LPR <span>ZONE</span></h3>
        <div>
            <Link to="/home">Home</Link>
            <Link to="/review">Reviews</Link>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/blogs">Blogs</Link>
            <Link to="/about">About</Link>

        </div>
    
    </nav>
    );
};

export default Header;