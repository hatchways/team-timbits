import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import moment from 'moment-timezone';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { Box, Button, CssBaseline, InputAdornment, TextField, Typography } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import useStyles from './useStyles';

// Context
import { useAuth } from '../../../context/useAuthContext';
import { useSettings } from '../../../context/useSettingsContext';

// Component
import Confirm from '../Confirm/Confirm';

import axios from 'axios';

const Profile = (): JSX.Element => {
  const [use, setUse] = useState<boolean>(false);
  const classes = useStyles();
  const history = useHistory();
  const { loggedInUser } = useAuth();
  const {
    setDefault,
    updateUserTimezoneContext,
    updateUrlContext,
    updateViewContext,
    updateProgressContext,
    updateHeaderTextContext,
  } = useSettings();

  const handleSubmit = (url?: string, timezone?: string) => {
    axios.post('/profile/existingUrl', { url }, { withCredentials: true }).then((res) => {
      if (res.data.length === 0) {
        updateUserTimezoneContext(timezone);
        updateUrlContext(url);
        updateProgressContext(50);
        updateViewContext(<Confirm />);
        updateHeaderTextContext('Your Google Calendar is connected!');
      } else {
        setUse(true);
      }
    });
  };
  const skipSetup = (timezone: string, username: string) => {
    setDefault(timezone, username ?? '');
    history.push('/dashboard');
  };

  return (
    <>
      <CssBaseline />
      <Formik
        initialValues={{
          url: '',
          timezone: moment.tz.guess(),
        }}
        validationSchema={Yup.object().shape({
          url: Yup.string().required('URL is required'),
          timezone: Yup.string().required('Please choose a timezone'),
        })}
        onSubmit={(values) => {
          handleSubmit(values.url, values.timezone);
        }}
      >
        {({ handleSubmit, handleChange, values, setFieldValue, touched, errors }) => (
          <form onSubmit={handleSubmit}>
            <Box mt={5} mb={2} mx={10} display="flex" alignItems="left" flexDirection="column">
              <Typography className={classes.headerText}>Create Your CalendApp URL:</Typography>
              <br />
              <TextField
                id="url-field"
                name="url"
                style={{ width: 470, height: '3.3rem' }}
                variant="outlined"
                value={values.url}
                helperText={use ? 'URL is already in use' : touched.url ? errors.url : ''}
                error={(touched.url && Boolean(errors.url)) || use}
                onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start" component="span" style={{ fontWeight: 700 }}>
                      CalendApp.com |
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
            <Box mt={5} mb={2} mx={10} display="flex" alignItems="left" flexDirection="column">
              <Typography className={classes.headerText}>Choose your timezone: </Typography>
              <br />
              <Autocomplete
                id="timezone-field"
                value={values.timezone}
                style={{ width: 350, height: '3.3rem' }}
                options={moment.tz.names()}
                getOptionLabel={(option) => option + ' (' + moment.tz(option).format('ha z') + ')'}
                getOptionSelected={(option) => values.timezone === option}
                renderInput={(params) => <TextField {...params} variant="outlined" />}
                onChange={(e, value) => setFieldValue('timezone', value)}
              />
            </Box>
            <Box display="flex" alignItems="center" flexDirection="column" mt={10}>
              <Button type="submit" className={classes.button}>
                Continue
              </Button>
              <br />
              <Button
                onClick={() => skipSetup(values.timezone, loggedInUser?.username ?? '')}
                disableRipple={true}
                className={classes.altButton}
              >
                Set up later
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </>
  );
};

export default Profile;
