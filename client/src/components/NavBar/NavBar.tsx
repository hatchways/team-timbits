import React from 'react';
import { useAuth } from '../../context/useAuthContext';
import useStyles from './useStyles';
import AvatarDisplay from '../AvatarDisplay/AvatarDisplay';
import Link from '@material-ui/core/Link';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AuthMenu from '../AuthMenu/AuthMenu';

interface Props {
  handleDrawerToggle?: () => void;
}

const NavBar = (): JSX.Element => {
  const { loggedInUser } = useAuth();
  const classes = useStyles();
  return (
    <AppBar className={classes.root} position="static">
      <Toolbar>
        <Typography className={classes.title} variant="h6">
          MyCalendarApp
        </Typography>
        <Typography>
          <Link color="textPrimary" variant="h6">
            Home
          </Link>
          <Link color="textPrimary" variant="h6">
            Intergation
          </Link>
          <Link color="textPrimary" variant="h6">
            Upgrade
          </Link>
        </Typography>
        <AvatarDisplay />
        <Typography variant="h5">{loggedInUser?.username}</Typography>
        <AuthMenu />
      </Toolbar>
    </AppBar>
  );
};
export default NavBar;
