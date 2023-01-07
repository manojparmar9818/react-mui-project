import React, { useState } from 'react'
import { Avatar, Box, Menu, MenuItem, Typography } from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn';

function UserProfile() {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);        
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <Box
            sx={{ display: 'flex', alignItems: 'center', height: '100%', gap: 2, minWidth: '25%' }}
        >
            <Avatar
                alt="User"
                src="https://i.pinimg.com/originals/0a/dd/87/0add874e1ea0676c4365b2dd7ddd32e3.jpg"
                sx={{ width: 80, height: 80 }}
                underline='none'
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            />
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    disablePadding: true,
                    'aria-labelledby': 'basic-button',
                }}
                sx={{
                    padding: 0,
                    '& li': {
                        fontSize: 13,
                        bgcolor: '#f8991f',
                        color: '#fff'                        
                    },
                    '& li:last-of-type': {
                        bgcolor: '#232e3e',                        
                    },
                    '& li:hover': {
                        fontSize: 13,
                        bgcolor: '#f8991f',
                        color: '#fff'                        
                    }
                }}
            >
                <MenuItem onClick={handleClose}>Upload New</MenuItem>
                <MenuItem onClick={handleClose}>Remove</MenuItem>
            </Menu>
            <Box sx={{fontSize: 16}}>Manoj Parmar<Typography variant="caption" sx={{ display: 'flex', alignItems: 'center', fontSize: 9, color: '#888' }}><LocationOnIcon sx={{ fontSize: 10 }} /> Sec-24, Gurgaon, HR</Typography></Box>
        </Box>
    )
}

export default UserProfile