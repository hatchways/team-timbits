import { useState } from 'react';
import { FormikHelpers } from 'formik';
import useStyles from './useStyles';
import { CssBaseline, Box, Grid, Paper, Typography, Button } from '@material-ui/core';
import register from '../../helpers/APICalls/register';
import SignUpForm from './SignUpForm/SignUpForm';
import AuthHeader from '../../components/AuthHeader/AuthHeader';
import { useAuth } from '../../context/useAuthContext';
import { useSnackBar } from '../../context/useSnackbarContext';
import AppLogo from '../../components/AppLogo';
import SignUpFormSimple from './SignupFormSimple/SignUpFormSimple';
import checkUserEmail from '../../helpers/APICalls/checkUserEmail';
import GoogleConnect from '../../components/GoogleConnect/GoogleConnect';

export default function Register(): JSX.Element {
  const classes = useStyles();
  const { updateLoginContext } = useAuth();
  const { updateSnackBarMessage } = useSnackBar();
  const [showSimpleForm, setShowSimpleForm] = useState(true);
  const [showGoogleConnect, setShowGoogleConnect] = useState(false);

  const handleSubmit = (
    { username, email, password }: { email: string; password: string; username: string },
    { setSubmitting }: FormikHelpers<{ email: string; password: string; username: string }>,
  ) => {
    register(username, email, password).then((data) => {
      if (data.error) {
        console.error({ error: data.error.message });
        setSubmitting(false);
        updateSnackBarMessage(data.error.message);
      } else if (data.success) {
        updateLoginContext(data.success);
      } else {
        // should not get here from backend but this catch is for an unknown issue
        console.error({ data });

        setSubmitting(false);
        updateSnackBarMessage('An unexpected error occurred. Please try again');
      }
    });
  };

  const handleSubmitSimple = ({ email }: { email: string }, { setSubmitting }: FormikHelpers<{ email: string }>) => {
    checkUserEmail(email).then((data) => {
      if (data.success) {
        //user email exists in database
        setSubmitting(false);
        updateSnackBarMessage('User email already exists, plz try log in');
      } else if (data.error) {
        //user email does not exists in database, continue to signup process
        setShowGoogleConnect(true);
      }
    });
  };
  if (showGoogleConnect) {
    return <GoogleConnect asideText="Already have an account?" btnText="Log in" />;
  }
  return (
    <Grid container component="main" justify="center" className={classes.root}>
      <CssBaseline />
      <Grid item xs={12} sm={7} md={5}>
        <Box m={4}>
          <AppLogo />
        </Box>
        <Paper elevation={6} square>
          <Box className={classes.formContainer}>
            <Box maxWidth={450} alignSelf="center" m={4}>
              <Typography component="h1" variant="h5">
                Sign up with CalendApp
              </Typography>
            </Box>
            {showSimpleForm ? (
              <Box width="100%" maxWidth={450} p={3} alignSelf="center">
                <SignUpFormSimple handleSubmit={handleSubmitSimple} />
              </Box>
            ) : (
              <Box width="100%" maxWidth={450} p={3} alignSelf="center">
                <SignUpForm handleSubmit={handleSubmit} />
              </Box>
            )}
            <Box width="100%" alignSelf="center">
              <AuthHeader linkTo="/login" asideText="Already have an account?" btnText="Log in" />
            </Box>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
}
