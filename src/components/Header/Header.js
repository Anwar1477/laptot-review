import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CoustomLink';

const Header = () => {
    return (
        <div className='nav-area'>
            <div className='project-name'>
            <h1>LAPTOP <span>ZONE</span></h1>
            </div>
          <div>
          <nav>
                <CustomLink className='link' to='/home'> HOME </CustomLink>
                <CustomLink className='link' to='/review'> REVIEW </CustomLink>
                <CustomLink className='link' to='/dashboard'> DASHBOARD </CustomLink>
                <CustomLink className='link' to='/blogs'> BLOGS </CustomLink>
                <CustomLink className='link' to='/about'> ABOUT </CustomLink>
            </nav>
          </div>
        </div>
    );
};

export default Header;