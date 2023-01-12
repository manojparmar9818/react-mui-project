import React, { useState } from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {
  Avatar,
  Menu,
  Tooltip,
  MenuItem,
  Stack,
  Link,
  styled,
  Container,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import UserProfile from "./user/UserProfile";
import AllInboxIcon from "@mui/icons-material/AllInbox";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import LogoutIcon from '@mui/icons-material/Logout';

const HeaderElement = styled(Box)({
  background: "#232e3e",
  color: "#fff",
  position: "static",
});

const drawerWidth = '100%';
const navItems = ['Home', 'About', 'Contact'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function MenuItems(){
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
  return(
    <Stack 
      direction={{
        xs: 'column', sm: 'column', md: 'row'
      }}
      sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'start',
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
            position: {xs: 'static', sm: 'static', md: 'absolute'},
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
  )
}

const NewHeader = props => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const handleDrawerToggle = () => {
    setMobileOpen(prevState => !prevState);
  };
  const handleOpenUserMenu = event => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map(item =>
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        )}
      </List>
      <Button onClose={handleDrawerToggle}>test</Button>
    </Box>
  );
  const container = window !== undefined ? () => window().document.body : undefined;
  return(
    <>
      
      <AppBar component="nav" sx={{background: "#232e3e",
  color: "#fff",
  position: "sticky",}}>
      <Container maxWidth="xl" sx={{'& .MuiToolbar-root': {px: 0}}}>
        <Toolbar>
        
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 1, display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: {xs: 1, md: 0}, display: { xs: 'block', md: 'block' } }}
          >
            LOGO
          </Typography>
          
          <Box sx={{ flexGrow: 1, ml: 30, display: { xs: 'none', md: 'block' } }}>
            {/* {navItems.map((item) => (
              <Button key={item} sx={{ color: '#fff' }}>
                {item}
              </Button>
            ))} */}
            <MenuItems />
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar src="https://i.pinimg.com/originals/0a/dd/87/0add874e1ea0676c4365b2dd7ddd32e3.jpg" alt="avatar" />
              </IconButton>
              
            </>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
        </Container>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, bgcolor: '#232e3e', color: '#fff' },
          }}
        >
          <Box sx={{display: 'flex', flexDirection: 'column', p: 3}}>
            <Box sx={{display: 'flex'}}>
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, display: { xs: 'block', sm: 'block' } }}
              >
                LOGO
              </Typography>
              <Button
                aria-label="close drawer"
                edge="end"
                onClick={handleDrawerToggle}
                sx={{ display: { md: 'none' }, bgcolor: '#fff', color: '#232e3e', padding: 0, minWidth: '45px' }}
              ><CloseIcon /></Button>
            </Box>
            <Box sx={{display: 'flex', py: 2}}>
                <UserProfile />
            </Box>
            <Box sx={{display: 'flex', flexDirection: 'column'}}>
              <List sx={{'& li .MuiSvgIcon-root': {paddingRight: '10px',}}}>
                <ListItem sx={{position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems: 'self-start', color: '#F8991F'}}
                ><Box sx={{display: 'flex', gap: '0px', alignItems: 'center'}}><EventAvailableIcon /> Menu 1</Box>
                  <List sx={{color: '#fff', pl: 2, '& li': {fontWeight: '300'}, '&:before': {content: `""`, width: '1px', bgcolor: '#F8991F', position: 'absolute', left: 10, bottom: 25, top: 5}, '& li:after':{content: `""`, position: 'absolute', left: '-5px', width: 'calc(25% - 15px)', height: '1px', bgcolor: '#F8991F'}}}>
                    <ListItem>Submenu item1</ListItem>
                    <ListItem>Submenu item2</ListItem>
                    <ListItem>Submenu item3</ListItem>
                  </List>
                  <Box sx={{position: 'absolute', right: 0, top: '10px', '& svg': {color: '#fff'}}}><ExpandLessIcon /></Box>
                </ListItem>
                <ListItem><EventAvailableIcon /> Menu 2</ListItem>
                <ListItem><EventAvailableIcon /> Profile</ListItem>
                <ListItem><LogoutIcon /> Logout</ListItem>
              </List>
            </Box>
          </Box>
        </Drawer>
      </Box>
    </>
  );
};
export default NewHeader;


