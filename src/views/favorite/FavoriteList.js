import React from 'react'
import { Button, Typography } from '@mui/material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useNavigate } from 'react-router-dom';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import FavoriteIcon from '@mui/icons-material/Favorite';
import swal from 'sweetalert';
import { RatingChart } from './../details/RatingChart';

export const FavoriteList = ({ favList, getLength }) => {

    const [fav, setFav] = React.useState(favList)
    const [empty, setEmpty] = React.useState(false)

    const naviagte = useNavigate()

    const backToHome = () => {
        naviagte('/')
    }

    React.useEffect(() => {
        window.scrollTo(0, 0)
        getLength(fav.length)
        if (fav.length === 0) {
            setEmpty(true)
        } else {
            setEmpty(false)
        }
        setFav((prevState) => [...prevState, favList])
    }, [])


    const remove = (id) => {
        swal({
            title: "Are you sure?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    swal("Your item has been deleted!", {
                        icon: "success",
                    });
                    const temp = fav.filter(q => q.id !== id)
                    setFav([...temp])
                } else {
                    swal("Your item is safe");
                }
            });
    }

    return (
        <div className='favorite-container'>
            {empty ?
                <div className='blank-fav'>
                    <Typography variant='h5' color='error' className='cart-msg-fav'>Nothing Add to your Favorite List <FavoriteBorderIcon color='error' sx={{ fontSize: '34px' }} /></Typography>
                    <Button color='error' variant='contained' onClick={backToHome} startIcon={<ArrowCircleLeftIcon />}>Back to Home Page</Button>
                </div>
                :
                <div className='fav-conatiner'>
                    <Typography variant='h4' color='error' className='header'>Favorite <FavoriteIcon color='error' sx={{ fontSize: '44px' }} /></Typography>
                    {fav.map((item, index) =>
                        <div key={index} className='favorite-list'>
                            <img src={item.image} />
                            <Typography className='title-fav'>{item.title}</Typography>
                            <RatingChart ratingValue={item.rating} />
                            <Button onClick={() => remove(item.id)}><DeleteForeverIcon color='error' /></Button>
                        </div>
                    )}
                </div>
            }
        </div>
    )
}
