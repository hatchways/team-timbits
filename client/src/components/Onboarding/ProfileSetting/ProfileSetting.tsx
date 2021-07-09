import { TextField, InputAdornment, CircularProgress } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import Grid from '@material-ui/core/Grid';
import moment from 'moment-timezone';
import { Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { Typography } from '@material-ui/core';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../../context/useAuthContext';
import { useSocket } from '../../../context/useSocketContext';

interface Props {
  handleSubmit: (
    {
      url,
      timezone,
    }: {
      url: string;
      timezone: any;
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
  const { initSocket } = useSocket();

  const history = useHistory();

  useEffect(() => {
    initSocket();
  }, [initSocket]);

  if (loggedInUser === undefined) return <CircularProgress />;
  if (!loggedInUser) {
    history.push('/login');
    return <CircularProgress />;
  }

  return (
    <Formik
      initialValues={{
        url: '',
        timezone: '',
      }}
      validationSchema={Yup.object().shape({
        url: Yup.string()
          .required('Url is required')
          .test('oneOfAKindUrl', 'url is not valid', function (url: any) {
            if (url === '') {
              return;
            }
            fetch(`/api/user/uniqueUrl?url=${url}`)
              .then((res) => res.json())
              .then((data) => {
                if (!data.isUnique) {
                  return;
                }
              })
              .catch((err) => {
                console.error(err);
              });
            return url;
          }),
        timezone: Yup.string().required('Please choose a timezone'),
      })}
      onSubmit={handleSubmit}
    >
      {({ handleSubmit, handleChange, values, touched, errors }) => (
        <form onSubmit={handleSubmit} noValidate>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={4}>
              <Typography variant="h6">Create Your CalendApp URL: </Typography>
            </Grid>
            <Grid item xs={8}>
              <TextField
                id="url-field"
                name="url"
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
            </Grid>
            <Grid item xs={4}>
              <Typography variant="h6">Choose your timezone: </Typography>
            </Grid>
            <Grid item xs={8}>
              <Autocomplete
                id="timezone-field"
                value={values.timezone}
                options={moment.tz.names()}
                getOptionLabel={(option) => option + ' (' + moment.tz(option).format('ha z') + ')'}
                getOptionSelected={(option) => values.timezone === option}
                renderInput={(params) => <TextField {...params} label="Select your timezone" variant="outlined" />}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
        </form>
      )}
    </Formik>
  );
};

export default ProfileSetting;
