import { useState, MouseEvent } from 'react';
import useStyles from './useStyles';

import { Box, Button, Popper, MenuItem, Grow, Paper, ClickAwayListener, MenuList } from '@material-ui/core';

// Context
import { useAuth } from '../../context/useAuthContext';

const AuthMenu = (): JSX.Element => {
  const classes = useStyles();
  const { loggedInUser, logout } = useAuth();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);
  const handleLogout = () => {
    handleClose();
    logout();
  };

  return (
    <Box mr={3}>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        disableRipple={true}
        className={classes.button}
      >
        <img src={loggedInUser?.picture} alt="profile picture" className={classes.logo} />
        {loggedInUser?.username}
      </Button>

      <Popper open={Boolean(anchorEl)} anchorEl={anchorEl} transition disablePortal>
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList>
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </Box>
  );
};

export default AuthMenu;
