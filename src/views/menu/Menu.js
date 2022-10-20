import React from 'react'
import Tooltip from '@mui/material/Tooltip';
import { NavLink } from 'react-router-dom';

export const Menu = () => {

  return (
    <div className='menu-container'>
      <Tooltip title='Home page'>
        <NavLink to='/' className='navlink'>
          <p>Home</p>
        </NavLink>
      </Tooltip>
      <p>About Us</p>
      <p>Shop</p>
      <p>Pages</p>
      <p>Blog</p>
      <p>Contact Us</p>
    </div>
  )
}
