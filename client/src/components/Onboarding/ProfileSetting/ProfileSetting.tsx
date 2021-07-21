import { TextField, InputAdornment, CircularProgress, Box, Button, Grid } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import moment from 'moment-timezone';
import { Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../../context/useAuthContext';
import ProgressBar from '../ProgressBar';
import useStyles from './useStyles';
import AppLogo from '../../AppLogo';
import Confirm from '../Confirm/Confirm';

interface Props {
  handleSubmit: (
    {
      url,
      timezone,
    }: {
      url: string;
      timezone: string;
    },
    {
      setStatus,
      setSubmitting,
    }: FormikHelpers<{
      url: string;
      timezone: string;
    }>,
  ) => void;
}

const ProfileSetting = ({ handleSubmit }: Props): JSX.Element => {
  const { loggedInUser } = useAuth();
  const classes = useStyles();
  const history = useHistory();

  if (loggedInUser === undefined) return <CircularProgress />;
  if (!loggedInUser) {
    history.push('/login');
    return <CircularProgress />;
  }

  return (
    <Grid container spacing={5}>
      <Grid item xs={12}>
        <Box mt={6} className={classes.root}>
          <AppLogo />
          <Box className={classes.formWrapper}>
            <ProgressBar progressText={'Welcome to CalendApp'} progressValue={25} />
            <Box className={classes.formItemsWrapper}>
              <Formik
                initialValues={{
                  url: '',
                  timezone: '',
                }}
                isValidating={true}
                validationSchema={Yup.object().shape({
                  url: Yup.string().required('Url is required'),
                  timezone: Yup.string().required('Please choose a timezone'), // set up a test
                })}
                onSubmit={handleSubmit}
              >
                {({ handleSubmit, handleChange, values, touched, errors }) => (
                  <form onSubmit={handleSubmit}>
                    <Box mt={5} mb={2} mx={10} className={classes.formItem}>
                      <Typography variant="h6" style={{ marginRight: '8px' }}>
                        Create Your CalendApp URL:
                      </Typography>
                      <TextField
                        id="url-field"
                        name="url"
                        style={{ width: 470 }}
                        variant="outlined"
                        value={values.url}
                        helperText={touched.url ? errors.url : ''}
                        error={touched.url && Boolean(errors.url)}
                        onChange={handleChange}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end" component="span">
                              | {loggedInUser.username}
                            </InputAdornment>
                          ),
                        }}
                      />
                    </Box>
                    <Box mb={2} mx={10} className={classes.formItem}>
                      <Typography variant="h6">Choose your timezone: </Typography>
                      <Autocomplete
                        id="timezone-field"
                        value={values.timezone}
                        style={{ width: 270 }}
                        options={moment.tz.names()}
                        getOptionLabel={(option) => option + ' (' + moment.tz(option).format('ha z') + ')'}
                        getOptionSelected={(option) => values.timezone === option}
                        renderInput={(params) => <TextField {...params} variant="outlined" />}
                        onChange={handleChange}
                      />
                    </Box>
                  </form>
                )}
              </Formik>
              <Button>{<Confirm loggedInUser={loggedInUser} /> ? 'Contiune' : ''}</Button>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ProfileSetting;
