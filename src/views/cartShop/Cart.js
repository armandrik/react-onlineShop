import React from 'react'
import { Button, TextField, Typography } from '@mui/material'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useNavigate } from 'react-router-dom';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import SellIcon from '@mui/icons-material/Sell';
import swal from 'sweetalert';
import AddSharpIcon from '@mui/icons-material/AddSharp';
import RemoveSharpIcon from '@mui/icons-material/RemoveSharp';
import CreditScoreIcon from '@mui/icons-material/CreditScore';

export const Cart = ({ cartList, getCartLength }) => {

    const result = 0
    const [cart, setCard] = React.useState(cartList)
    const [empty, setEmpty] = React.useState(false)
    const [count, setCount] = React.useState(1)
    const [cost, setCost] = React.useState(result)
    const navigate = useNavigate()

    const increment = () => {
        setCount(p => p + 1)
    }
    const decrement = (id) => {
        if (count !== 1) {
            setCount(p => p - 1)
        } else {
            return
        }
    }

    React.useEffect(() => {
        window.scrollTo(0, 0)
        getCartLength(cart.length)
        if (cart.length === 0) {
            setEmpty(true)
        } else {
            setEmpty(false)
        }
        setCard(prevState => [...prevState, cartList])
        const result = calculatePrice()
        setCost(result)
    }, [result])

    const backToHome = () => {
        navigate('/')
    }

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
                    const temp = cart.filter(q => q.id !== id)
                    cartList = [...temp]
                    setCard(cartList)
                    // setCard([...temp])
                } else {
                    swal("Your item is safe");
                }
            });
    }

    const calculatePrice = () => {
        const totalPrice = cart.map(i => i.price)
        let sum = 0;
        for (const value of totalPrice) {
            sum += Math.floor(value);
        }
        return sum
    }

    return (
        <div className='cart-container'>
            {empty ?
                <div className='blank'>
                    <Typography variant='h5' color='primary' className='cart-msg'>Nothing Add to your cart <ShoppingBasketIcon sx={{ fontSize: '34px' }} /></Typography>
                    <Button variant='contained' onClick={backToHome} startIcon={<ArrowCircleLeftIcon />}>Back to Home Page</Button>
                </div>
                :
                <div className='cart'>
                    <Typography variant='h4' color='primary' className='header'>Cart<ShoppingCartIcon sx={{ fontSize: '44px' }} /></Typography>
                    <Typography variant='h5' color='primary' className='header'><FormatListBulletedIcon />total: {cart.length - 1}</Typography>
                    <div className='none-display'>
                        {cart.map((item, index) =>
                            <div key={index} className='cart-list'>
                                <img src={item.image} />
                                <Typography className='title' variant='p'>{item.title}</Typography>
                                <Typography variant='h6' className='price'>{(item.price * count).toFixed(1)}<AttachMoneyIcon sx={{ color: '#B12704' }} /></Typography>
                                <div className='product-number'>
                                    <Button variant='outlined' color='secondary' onClick={() => increment()}><AddSharpIcon /></Button>
                                    <Typography variant='p' component='span' color='secondary' className='input'>{count}</Typography>
                                    <Button variant='outlined' color='secondary' onClick={() => decrement(item.id)}><RemoveSharpIcon /></Button>
                                </div>
                                <Button variant='contained' endIcon={<RemoveShoppingCartIcon />} onClick={() => remove(item.id)}>Delete</Button>
                            </div>
                        )}
                    </div>
                    <div className='total-price'>
                        <Typography variant='h4' color='primary' className='total'><SellIcon sx={{ fontSize: '45px' }} className='sell-money' />Total Price</Typography>
                        <Typography color='primary' variant='h4' className='total'>{(cost * count).toFixed(1)}<AttachMoneyIcon sx={{ color: '#B12704', fontSize: '35px' }} /></Typography>
                    </div>
                    <Button fullWidth variant='contained' size='large' sx={{ fontSize: '19px' }} endIcon={<CreditScoreIcon />}>Payment</Button>
                </div>
            }
        </div>
    )
}