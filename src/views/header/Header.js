import React from 'react'
import { Acount } from './Acount'
import { BasketShop } from './BasketShop'
import { Favorite } from './Favorite'
import logo from '../../images/undraw_ordinary_day_re_v5hy.svg'
import { NavLink } from 'react-router-dom'
import { Tooltip } from '@mui/material'

export const Header = ({ length, cartLength }) => {

  return (
    <div className='header-container' id="main">
      <NavLink to='/'>
        <Tooltip title="Home">
          <img src={logo} className='site-logo' />
        </Tooltip>
      </NavLink>
      <div className='rigth-bar-wrapper'>
        <BasketShop cartLength={cartLength} />
        <Favorite length={length} />
        <Acount />
      </div>
    </div>
  )
}
