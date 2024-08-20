import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

import {TextField} from '@mui/material'

import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import Autocomplete from '@mui/material/Autocomplete';

// The following code is to build a side search bar
const Search = styled('div')(({theme}) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: '#FFAEA5',
    '&:hover': {
      backgroundColor: '#FF968A',
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]:{
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  }));
  
const SearchIconWrapper = styled('div')(({theme}) => ({
  padding: theme.spacing(0,2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));
  
const StyledInputBase = styled(InputBase) (({theme}) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // adjusting vertical padding and font size from Search Icon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));
// end of side search bar styling
export default function PrimarySearchAppBar({inventory}) {
  const [anchorEl, setanchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setanchorEl(event.currentTarget);
  };
  
  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  }

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setanchorEl(null);
    handleMobileMenuClose();
  };

  const menuID = 'primary-search'
  const renderMenu = (
    <Menu
      anchorEl = {anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuID}
      keepMounted
      transformOrigin={{
        vertical:'top',
        horizontal:'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose} 
    >
      <MenuItem onclick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onclick={handleMenuClose}>My Account</MenuItem>
    </Menu>
  );

  const mobileMenuID = 'primary-search-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical:'top',
        horizontal: 'right',
      }}
      id={mobileMenuID}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton 
          size="large" 
          aria-label="show 5 new mails"
          color="inherit"
        >
          <Badge badgeContent={5} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onclick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  )
  return (
      <Box sx={{ flexGrow: 1}}>
          <AppBar position="static">
              <Toolbar>
                  <IconButton
                      size="large"
                      edge="start"
                      color="inherit"
                      aria-label="open drawer"
                      sx={{ mr: 0.1}}
                  >
                      <MenuIcon />
                  </IconButton>
                  <Typography
                      variant="h6"
                      noWrap
                      component="div"
                      sx={{display: {xs: 'none', sm: 'block'}}}
                  >
                      SuperMarket
                  </Typography>
                  <Search>
                      <SearchIconWrapper>
                          <SearchIcon />
                      </SearchIconWrapper>
                      <Autocomplete
                        disablePortal
                        id="combo-box"
                        options={inventory.map(item => item.name)}
                        sx={{ width: 300 }}
                        renderInput={(params) => <TextField {...params}/>}
                      />
                      
                  </Search>
                  <Box sx={{flexGrow: 1}} />
                  <Box sx={{display: {xs:'none', md: 'flex'}}}>
                      <IconButton
                          size="large"
                          aria-label="show 4 new mails"
                          color="inherit"
                      >
                          <Badge badgeContent={4} color="error">
                              <MailIcon />
                          </Badge>
                      </IconButton>
                      <IconButton
                          size="large"
                          aria-label="show 17 new mails"
                          color="inherit"
                      >
                          <Badge badgeContent={17} color="error">
                              <NotificationsIcon />
                          </Badge>
                      </IconButton>
                      <IconButton
                          size="large"
                          edge="end"
                          aria-label="account of current user"
                          aria-controls={menuID}
                          aria-haspopup="true"
                          onClick={handleProfileMenuOpen}
                          color="inherit"
                      >
                          <AccountCircle />
                      </IconButton>
                  </Box>
                  <Box sx={{display: {xs:'flex', md:'none'}}}>
                      <IconButton
                          size="large"
                          aria-label="show more"
                          aria-controls={mobileMenuID}
                          aria-haspopup="true"
                          onClick={handleMobileMenuOpen}
                          color="inherit"
                      >
                          <MoreIcon />
                      </IconButton>
                  </Box>
              </Toolbar>
          </AppBar>
          {renderMobileMenu}
          {renderMenu}
      </Box>
  );
}