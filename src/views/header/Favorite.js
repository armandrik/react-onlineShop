import React from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Badge from '@mui/material/Badge';
import { NavLink } from 'react-router-dom';
import Tooltip from '@mui/material/Tooltip';

export const Favorite = ({ length }) => {

  const [favNumber, setFavNumber] = React.useState(length)

  React.useEffect(() => {
    setFavNumber(length);
  }, [length])


  return (
    <NavLink to='/favorite' className='header-icon'>
      {favNumber > 0 ?
        <Badge badgeContent={favNumber} color="error">
          <Tooltip title='see favorite list'>
            <FavoriteBorderIcon sx={{ fontSize: '26px' , color : '#ffff' }} />
          </Tooltip>
        </Badge>
        :
          <Tooltip title='see favorite list'>
            <FavoriteBorderIcon sx={{ fontSize: '26px', color: '#ffff' }} />
          </Tooltip>
      }
    </NavLink>
  )
}
