import useStyles from './useStyles';
import { CssBaseline, Box, Grid, Paper, Typography } from '@material-ui/core';
import { FormikHelpers } from 'formik';
import login from '../../helpers/APICalls/login';
import LoginForm from './LoginForm/LoginForm';
import AuthHeader from '../../components/AuthHeader/AuthHeader';
import { useAuth } from '../../context/useAuthContext';
import { useSnackBar } from '../../context/useSnackbarContext';
import AppLogo from './../../components/AppLogo';

export default function Login(): JSX.Element {
  const classes = useStyles();
  const { updateLoginContext } = useAuth();
  const { updateSnackBarMessage } = useSnackBar();

  const handleSubmit = (
    { email, password }: { email: string; password: string },
    { setSubmitting }: FormikHelpers<{ email: string; password: string }>,
  ) => {
    login(email, password).then((data) => {
      if (data.error) {
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

  return (
    <Grid container component="main" justify="center" className={classes.root}>
      <CssBaseline />
      <Grid xs={12} sm={7} md={5}>
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
              <LoginForm handleSubmit={handleSubmit} />
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
