import React, { useState } from 'react'
import { Box, Container, Stack, Grid, Paper, styled, Link, MenuItem, Menu, Avatar } from '@mui/material'
import { deepOrange } from '@mui/material/colors';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

const HeaderElement = styled(Box)({
    background: '#232e3e',
    color: '#fff',
    padding: '0.75rem 0',
    position: 'sticky'
});
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: 'transparent',
    ...theme.typography.body2,
    padding: theme.spacing(0),
    // textAlign: 'center',
    boxShadow: 'none',
    color: '#fff',
}))
const Header = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (e) => {
        if(anchorEl !== e.currentTarget){
            setAnchorEl(e.currentTarget);
        }
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <HeaderElement>
            <Container maxWidth="xl">
                <Stack direction="row" alignItems="center">
                    <Box>Logo</Box>
                    <Box sx={{ flexGrow: 1 }}>
                        <Stack direction="row"
                            sx={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                justifyContent: 'start',
                                marginLeft: '20%',
                                typography: 'body2',
                                '& > a': {
                                    color: '#fff'
                                },
                                '& :hover': {
                                    color: '#f9a200'
                                },
                                '& > :not(style) + :not(style)': {
                                    ml: 10
                                },
                            }}
                        >
                            <Link
                                href='#'
                                underline='none'
                                id="basic-button"
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                                onMouseOver={handleClick}
                            >Menu 1</Link>
                            <Link href='#' underline='none'>Menu 2</Link>
                            <Link href='#' underline='none'>Menu 3</Link>
                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                    onMouseLeave: handleClose,
                                    disablePadding: true,
                                    'aria-labelledby': 'basic-button'
                                }}
                                sx={{
                                    '& li': {
                                        fontSize: 14,
                                        minWidth: 100
                                    },
                                    '& li:hover': {
                                        bgcolor: '#f9a200',
                                        color: '#fff'
                                    }
                                }}
                            >
                                <MenuItem onClick={handleClose}>List Item 1</MenuItem>
                                <MenuItem onClick={handleClose}>List Item 2</MenuItem>
                                <MenuItem onClick={handleClose}>List Item 3</MenuItem>
                            </Menu>
                        </Stack>
                    </Box>
                    <Box>
                        <Stack direction="row" spacing={4} alignItems="center">
                            <NotificationsNoneIcon />
                            <Avatar src="https://i.pinimg.com/originals/0a/dd/87/0add874e1ea0676c4365b2dd7ddd32e3.jpg" alt="avatar" />
                        </Stack>
                    </Box>
                </Stack>
            </Container>
        </HeaderElement>
    )
}
export default Header