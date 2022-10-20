import React from 'react'
import women from '../../images/undraw_woman_re_afr8.svg'
import jewelry from '../../images/undraw_jewelry_iima.svg'
import men from '../../images/undraw_people_re_8spw.svg'
import electric from '../../images/undraw_online_wishes_dlmr.svg'
import all from '../../images/undraw_omega_-4-kob.svg'
import Tooltip from '@mui/material/Tooltip';
import { Typography } from '@mui/material'

export const Category = ({ getFilter , getAll}) => {

    const Filter = (cat) => {
        getFilter(cat)
    }

    const giveMeAll = () =>{
        getAll()
    }

    return (
        <div className='category-container'>
            <Tooltip title='All'>
                <div onClick={() => giveMeAll()}>
                        <img src={all} />
                    <Typography variant='h6'>All</Typography>
                </div>
            </Tooltip>
            <Tooltip title='men category'>
                <div onClick={() => Filter("men's clothing")}>
                        <img src={men} />
                    <Typography variant='h6'>Men's clothing</Typography>
                </div>
            </Tooltip>
            <Tooltip title='electric device category'>
                <div onClick={() => Filter("electronics")}>
                        <img src={electric} />
                    <Typography variant='h6'>Electronics</Typography>
                </div>
            </Tooltip>
            <Tooltip title='women category'>
                <div onClick={() => Filter("women's clothing")}>
                        <img src={women} />
                    <Typography variant='h6'>Women's clothing</Typography>
                </div>
            </Tooltip>
            <Tooltip title='jewlry category'>
                <div onClick={() => Filter("jewelery")}>
                        <img src={jewelry} />
                    <Typography variant='h6'>Jewelery</Typography>
                </div>
            </Tooltip>
        </div>
    )
}
