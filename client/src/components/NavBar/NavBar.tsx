import useStyles from './useStyles';
import AvatarDisplay from '../AvatarDisplay/AvatarDisplay';

import Link from '@material-ui/core/Link';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AuthMenu from '../AuthMenu/AuthMenu';

import Box from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

import AppLogo from '../AppLogo';
import IconButton from '@material-ui/core/IconButton';

import logo from '../../Images/logo.png';

// Context
import { useAuth } from '../../context/useAuthContext';

const NavBar = (): JSX.Element => {
  const classes = useStyles();
  const { loggedInUser } = useAuth();

  console.log(loggedInUser);

  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar className={classes.navbar}>
        <img src={logo} alt="logo" className={classes.logo} />
        <Box className={classes.navButtons} style={{ paddingRight: '0px' }}>
          <Link className={classes.navLinks} style={{ color: 'darkOrange' }}>
            Upgrade Account
          </Link>
          <Link className={classes.navLinks} style={{ color: 'black' }}>
            Integration
          </Link>
          <Link className={classes.navLinks} style={{ color: 'black' }}>
            Home
          </Link>
        </Box>
        <AuthMenu />
      </Toolbar>
    </AppBar>
  );
};
export default NavBar;
