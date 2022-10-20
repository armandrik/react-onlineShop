import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import { Button, Typography } from '@mui/material';
import { Product } from './../../context/ProductContext';
import 'react-alice-carousel/lib/alice-carousel.css';
import { useNavigate } from 'react-router-dom';
import logo from '../../images/undraw_marilyn_v-73-y.svg'

export const Carousel = ({carouselId}) => {

    const { data } = Product()
    const navigate = useNavigate()

    const carouselItem = (id) =>{
        carouselId(id)
        navigate('/details')
    }

    const responsive = {
        0: {
            items: 1
        },
        512: {
            items: 1
        },
    }

    const slideItem = data.slice(15, 19);
 
    const card = slideItem.map((i) => {
        return (
            <div key={i.id} className='carousel'>
                <div className='carousel-title'>
                    <Typography variant='p' sx={{color : '#ffff'}}>new product</Typography>
                    <Typography variant='h3' className='category' sx={{color : '#ffffffbf'}}>{i.category}</Typography>
                    <Typography variant='p' sx={{color : '#ffffffbf'}}>{i.title}</Typography>
                    <Button className='btn' fullWidth variant="contained" onClick={() => carouselItem(i.id)}>Shop now</Button>
                </div>
                <div className='carousel-img-container'>
                    <img src={logo} className='carousel-img'/>
                </div>
            </div>
        )
    })

    return (
        <div className='carousel-container'>
            <AliceCarousel
                mouseTracking
                infinite
                autoPlayInterval={2500}
                animationDuration={2500}
                disableButtonsControls
                responsive={responsive}
                autoPlay
                items={card}
            />
        </div>
    )
}
