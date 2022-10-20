import React from 'react'
import Button from '@mui/material/Button';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { Typography } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Tooltip from '@mui/material/Tooltip';

export const Footer = () => {
    return (
        <>
            <div className='footer-btn'>
                <a href='#main'>
                    <Tooltip title='go page start'>
                        <Button size="large" fullWidth sx={{ color: 'white' }}>Back to Top <ArrowUpwardIcon /></Button>
                    </Tooltip>
                </a>
            </div>
            <div className='footer-contaier'>
                <div>
                    <Typography variant='h6' sx={{ color: '#ffff' }}>Get to Know Us</Typography>
                    <Typography variant='p' sx={{ color: '#ffff', fontSize: '14px' }}>Careers</Typography>
                    <Typography variant='p' sx={{ color: '#ffff', fontSize: '14px' }}>Press Releases</Typography>
                    <Typography variant='p' sx={{ color: '#ffff', fontSize: '14px' }}>About us</Typography>
                    <Typography variant='p' sx={{ color: '#ffff', fontSize: '14px' }}>Blog</Typography>
                </div>
                <div>
                    <Typography variant='h6' sx={{ color: '#ffff' }}>Make Money with Us</Typography>
                    <Typography variant='p' sx={{ color: '#ffff', fontSize: '14px' }}>Associates Programme</Typography>
                    <Typography variant='p' sx={{ color: '#ffff', fontSize: '14px' }}>Protect and build your brand</Typography>
                    <Typography variant='p' sx={{ color: '#ffff', fontSize: '14px' }}>Seller Fulfilled Prime</Typography>
                    <Typography variant='p' sx={{ color: '#ffff', fontSize: '14px' }}>Customer Service</Typography>
                </div>
                <div>
                    <Typography variant='h6' sx={{ color: '#ffff' }}>Let Us Help You</Typography>
                    <Typography variant='p' sx={{ color: '#ffff', fontSize: '14px' }}>COVID-19</Typography>
                    <Typography variant='p' sx={{ color: '#ffff', fontSize: '14px' }}>Returns & Replacements</Typography>
                    <Typography variant='p' sx={{ color: '#ffff', fontSize: '14px' }}>Cancel contracts</Typography>
                    <Typography variant='p' sx={{ color: '#ffff', fontSize: '14px' }}>Recycling</Typography>
                </div>
                <div>
                    <Typography variant='h6' sx={{ color: '#ffff' }}>Be With Us</Typography>
                    <span className='social-icons-footer'>
                        <Tooltip title='linkdin page'>
                            <a href='https://www.linkedin.com/in/arman-drik-930460217/'><LinkedInIcon sx={{ color: '#ffff', fontSize: '30px' }} /></a>
                        </Tooltip>
                        <Tooltip title='github page'>
                            <a href='https://github.com/armandrik'><GitHubIcon sx={{ color: '#ffff', fontSize: '30px' }} /></a>
                        </Tooltip>
                        <Tooltip title='instagram page'>
                            <a href='https://www.instagram.com/arman.drik/'><InstagramIcon sx={{ color: '#ffff', fontSize: '30px' }} /></a>
                        </Tooltip>
                    </span>
                </div>
            </div>
            <div className='copy-right'>
                <Typography variant='span' sx={{ fontSize: '12px', color: '#ffff' }}>Copyright © 2022 Arman Drik</Typography>
            </div>
        </>
    )
}
