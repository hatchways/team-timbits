import useStyles from './useStyles';
import logo from '../../Images/logo.png';
import { CssBaseline, Container, Typography, Box, Button } from '@material-ui/core';

function Login(): JSX.Element {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <Container className={classes.root}>
        <Box display="flex" flexDirection="column" alignItems="center" mt={7}>
          <img src={logo} />
          <Box display="flex" flexDirection="column" alignItems="center" className={classes.mdWrapper} mt={3}>
            <Typography className={classes.header}>Welcome to CalendApp!</Typography>
            <Typography className={classes.text}>
              The easiest way for you to sign up is with Google.
              <br /> This will automatically connect your calendar so you
              <br /> can start using CalendApp right away!
            </Typography>
            <Button className={classes.googleAuth} href="http://localhost:3001/auth/google">
              <img
                className={classes.googleLogo}
                alt="Google sign-in"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
              />
              Login with Google
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default Login;
