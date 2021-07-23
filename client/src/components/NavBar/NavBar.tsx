import useStyles from './useStyles';
import { Link, AppBar, Toolbar, Box } from '@material-ui/core';

// Component
import AuthMenu from '../AuthMenu/AuthMenu';

import logo from '../../Images/logo.png';

const NavBar = (): JSX.Element => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar className={classes.navbar}>
        <img src={logo} alt="logo" className={classes.logo} />
        <Box className={classes.navButtons}>
          <Link href="/dashboard" className={classes.navLinks} style={{ color: 'black' }}>
            Home
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

// Fix link
