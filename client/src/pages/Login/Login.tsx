import useStyles from './useStyles';
import { CssBaseline, Box, Grid, Paper, Typography } from '@material-ui/core';
import { FormikHelpers } from 'formik';
import AuthHeader from '../../components/AuthHeader/AuthHeader';
import { useSnackBar } from '../../context/useSnackbarContext';
import AppLogo from './../../components/AppLogo';
import checkUserEmail from '../../helpers/APICalls/checkUserEmail';
import LoginFormSimple from './LoginFormSimple/LoginFormSimple';
import GoogleConnect from '../../components/GoogleConnect/GoogleConnect';
import { useState } from 'react';

export default function Login(): JSX.Element {
  const classes = useStyles();
  const { updateSnackBarMessage } = useSnackBar();
  const [showGoogleConnect, setShowGoogleConnect] = useState(false);

  const handleSubmit = ({ email }: { email: string }, { setSubmitting }: FormikHelpers<{ email: string }>) => {
    checkUserEmail(email).then((data) => {
      if (data.error) {
        //user email does not exists in database
        setSubmitting(false);
        updateSnackBarMessage('User email does not  exists, plz try sign up');
      } else if (data.success) {
        //user email exists in database, continue to login process
        setShowGoogleConnect(true);
      }
    });
  };
  if (showGoogleConnect) {
    //TODO redirect to signup googleConnect compoenent, currently redirects to login
    return <GoogleConnect asideText="Dont have an account?" btnText="Signup" />;
  }

  return (
    <Grid container component="main" justifyContent="center" className={classes.root}>
      <CssBaseline />
      <Grid item xs={12} sm={7} md={5}>
        <Box m={4}>
          <AppLogo />
        </Box>
        <Paper elevation={6} square>
          <Box className={classes.formContainer}>
            <Box maxWidth={450} alignSelf="center" m={4}>
              <Typography component="h1" variant="h5">
                Log in to your account
              </Typography>
            </Box>
            <Box width="100%" maxWidth={450} p={3} alignSelf="center">
              <LoginFormSimple handleSubmit={handleSubmit} />
            </Box>

            <Box width="100%" alignSelf="center">
              <AuthHeader linkTo="/signup" asideText="Don't have an account?" btnText="Sign Up" />
            </Box>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
}
