import React, { useState, MouseEvent } from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Box, Button, Typography } from '@material-ui/core';

// Context
import { useAuth } from '../../context/useAuthContext';

const AuthMenu = (): JSX.Element => {
  const { loggedInUser, logout } = useAuth();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    handleClose();
    logout();
  };

  console.log(loggedInUser);

  return (
    <Box mr={3}>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        style={{ fontWeight: 700, fontSize: '0.9rem', color: 'black' }}
      >
        <img
          src={loggedInUser?.picture}
          alt="profile picture"
          style={{ width: '2.5rem', borderRadius: '100%', marginRight: '1rem' }}
        />
        {loggedInUser?.username}
      </Button>
      <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
        <MenuItem>Profile</MenuItem>
      </Menu>
    </Box>
  );
};

export default AuthMenu;

{
  /* <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        {loggedInUser?.username}
      </Button>
      <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
        <MenuItem>Profile</MenuItem>
      </Menu> */
}
