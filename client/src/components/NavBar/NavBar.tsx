import React from 'react';
import AvatarDisplay from '../AvatarDisplay/AvatarDisplay';
import { User } from '../../interface/User';
import { Link } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import AuthMenu from '../AuthMenu/AuthMenu';

interface Props {
  loggedInUser: User;
  handleDrawerToggle?: () => void;
}

const NavBar = ({ loggedInUser }: Props): JSX.Element => {
  return (
    <Grid>
      <Box>
        <AvatarDisplay loggedIn user={loggedInUser} />
        <Typography variant="h5">{loggedInUser.username}</Typography>
        <AuthMenu />
        <Link>Home</Link>
        <Link>Intergation</Link>
        <Link>Upgrade</Link>
      </Box>
    </Grid>
  );
};
export default NavBar;
