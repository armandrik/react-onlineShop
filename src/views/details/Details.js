import React from 'react'
import { Button, Typography } from '@mui/material'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { RatingChart } from './RatingChart';
import { getPost } from '../../services/getPost';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import swal from 'sweetalert';

export const Details = ({ productId, categoryPost, getFavList, getCartList }) => {

  const [post, setPost] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(false)
  const [favDisable, setFavDisable] = React.useState(false)
  const [disable, setDisable] = React.useState(false)

  React.useEffect(() => {
    (async () => {
      window.scrollTo(0, 0)
      setIsLoading(true)
      const result = await getPost(productId);
      setPost(result)
      setIsLoading(false)
      setFavDisable(false)
      setDisable(false)
    })();
    categoryPost(post.category)
  }, [productId ])


  const goToFav = (fav) => {
    getFavList(fav)
    setFavDisable(true)
    swal("Item Aded", "check your Favorite", "success");
  }

  const goToCart = (cart) => {
    getCartList(cart)
    setDisable(true)
    swal("Item Aded", "check your list", "success");
  }


  return (
    <>
      {isLoading ?
        <div>
          <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={true}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
          <Box sx={{ width: '100%' }}>
            <LinearProgress />
          </Box>
        </div>
        :
        <>
          <div className='detail-container'>
            <div className='img-container' data-content={post.category}>
              <img src={post.image} />
            </div>
            <div className='detail'>
              <Typography variant='h5' sx={{ color: '#0c0c0c' }} align='left' className='header-detail'>{post.title}</Typography>
              <div className='rating'>
                <RatingChart ratingValue={post.rating} />
                {post.rating ? <Typography sx={{ fontSize: '13px' }}>{post.rating.rate}</Typography> : null}
                {post.rating ? <Typography sx={{ color: '#81858b', fontSize: '13px' }}>({post.rating.count})</Typography> : null}
              </div>
              <div>
                <Typography className='price' sx={{ color: '#81858b' }} component='div'> Price:
                  <Typography variant='h6' className='price2' sx={{ color: '#424750' }}>{post.price}<AttachMoneyIcon sx={{ color: '#B12704' }} /></Typography>
                </Typography>
              </div>
              <Typography className='decribe' sx={{ color: '#424750' }}>{post.description}</Typography>
              <div className='btn-wrapper'>
                {disable ?
                  <Button variant='contained' endIcon={<CreditScoreIcon />} size='large' fullWidth>Check your Cart</Button>
                  :
                  <Button variant='contained' endIcon={<AddShoppingCartIcon />} size='large' fullWidth onClick={() => goToCart(post)}>Add to Cart</Button>}
                {favDisable ?
                  <Button variant='contained' color='error' endIcon={<FavoriteIcon />} size='large'>Done!</Button>
                  :
                  <Button variant='contained' color='error' endIcon={<FavoriteBorderIcon />} size='large' onClick={() => goToFav(post)}>Favorite list</Button>}
              </div>
            </div>
          </div>
          <div>
          </div>
        </>
      }
    </>
  )
}