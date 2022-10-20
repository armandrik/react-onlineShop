import React from 'react'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import Badge from '@mui/material/Badge';
import { NavLink } from 'react-router-dom';
import Tooltip from '@mui/material/Tooltip';

export const BasketShop = ({ cartLength }) => {

  const [basketNumber, setBasketNumber] = React.useState(cartLength)

  React.useEffect(() => {
    setBasketNumber(cartLength)
  }, [basketNumber , cartLength])


  return (
    <NavLink to='/cart' className='header-icon'>
      <Badge badgeContent={basketNumber} color="primary">
        {basketNumber > 0 ?
          <Tooltip title='see your shop list'>
            <ShoppingBasketIcon color='primary' sx={{ fontSize: '26px' , color : '#ffff' }} className='basket-number' />
          </Tooltip>
          :
          <Tooltip title='see your shop list'>
            <ShoppingBasketIcon sx={{ fontSize: '26px', color: '#ffff' }} className='basket-number' />
          </Tooltip>
        }
      </Badge>
    </NavLink>
  )
}
