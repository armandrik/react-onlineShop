import React from 'react'
import { Product } from './../../context/ProductContext';
import { Button, Typography } from '@mui/material';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Category } from '../category/Category'
import Tooltip from '@mui/material/Tooltip';
import { useNavigate } from 'react-router-dom';
import { RatingChart } from '../details/RatingChart';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';


export const ProductList = ({postId}) => {

    const { data } = Product();
    const [product , setProduct] = React.useState(data)
    const navigate = useNavigate()

    const goDetailPage = (id) => {
        postId(id)
        navigate('/details')
    }

    const goDetailPageWithImage = (id) => {
        postId(id)
        navigate('/details')
    }

    const getFilter = (cat) =>{
        const updatedList = data.filter(q => q.category === cat)
        setProduct(updatedList)
    }

    const getAll = () =>{
        setProduct(data)
    }

    return (
        <>
            <div className='title-product'>
                <Typography variant='h4' className='our-product-header'>OUR PRODUCT</Typography>
            </div>
            <Category getFilter={getFilter} getAll={getAll}/>
            <div className='product-container'>
                {product.map(item => {
                    return (
                        <div className='product' data-content={item.category} key={item.id}>
                            <Tooltip title='Click for more detalis'>
                                <div className='img-container' onClick={() => goDetailPageWithImage(item.id)}>
                                    <img src={item.image} />
                                </div>
                            </Tooltip>
                            <Typography variant='p' sx={{ fontSize: '14px', color: '#111111e7' }} className='describe'>{item.title}</Typography>
                            <div className='details'>
                                <div className='rating'>
                                    <RatingChart ratingValue={item.rating}/>
                                </div>
                            </div>
                            <Typography variant='p' className='price'>{item.price}<AttachMoneyIcon sx={{ color: '#B12704' }}/></Typography>
                            <Tooltip title='shop now'>
                                <Button endIcon={<ShoppingBasketIcon />} fullWidth size='large' variant='contained' onClick={() => goDetailPage(item.id)}>Shop Now</Button>
                            </Tooltip>
                        </div>
                    )
                })}
            </div>
        </>
    )
}
