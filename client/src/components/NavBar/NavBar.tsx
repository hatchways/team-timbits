import useStyles from './useStyles';
import { Link, AppBar, Toolbar, Box } from '@material-ui/core';

// Context
import { useAuth } from '../../context/useAuthContext';

// Component
import AuthMenu from '../AuthMenu/AuthMenu';

import logo from '../../Images/logo.png';

const NavBar = (): JSX.Element => {
  const classes = useStyles();
  const { loggedInUser } = useAuth();

  console.log(loggedInUser);

  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar className={classes.navbar}>
        <img src={logo} alt="logo" className={classes.logo} />
        <Box className={classes.navButtons}>
          <Link className={classes.navLinks} style={{ color: 'black' }}>
            Home
          </Link>
          <Link className={classes.navLinks} style={{ color: 'black' }}>
            Integration
          </Link>
          <Link className={classes.navLinks} style={{ color: 'darkOrange' }}>
            Upgrade Account
          </Link>
        </Box>
        <AuthMenu />
      </Toolbar>
    </AppBar>
  );
};
export default NavBar;
