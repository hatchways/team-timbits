import { Formik } from 'formik';
import useStyles from './useStyles';
import { Grid, Box, TextField, Typography, Button, Paper } from '@material-ui/core';
import createEvent from './../../helpers/APICalls/createMeeting';
import { Event } from '../../interface/Event';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import { useSnackBar } from '../../context/useSnackbarContext';

const defaultFormValues = {
  eventName: '',
  eventDescription: '',
  eventDuration: '30',
  eventUrl: '',
};
interface InitialFormValuesTypes {
  eventName: string;
  eventDescription: string;
  eventDuration: string;
  eventUrl: string;
}
interface Props {
  initialFormValues?: InitialFormValuesTypes;
}
const NewEventType = ({ initialFormValues = defaultFormValues }: Props): JSX.Element => {
  const { updateSnackBarMessage } = useSnackBar();
  const classes = useStyles();
  const history = useHistory();

  const schema = Yup.object().shape({
    eventName: Yup.string().min(3, 'Too Short!').max(50, 'Too Long!').required('Required'),
    eventDescription: Yup.string().min(25, 'Too Short!').max(200, 'Too Long!'),
    eventDuration: Yup.number().positive().integer().required('Required'),
    eventUrl: Yup.string(),
  });

  const handleFormSubmit = ({ eventName, eventDescription, eventUrl, eventDuration }: Event) => {
    createEvent({ eventName, eventDescription, eventUrl, eventDuration }).then((data) => {
      if (data.success) {
        history.push('/dashboard');
      } else {
        updateSnackBarMessage('Error: Could not successfully create your meeting');
      }
    });
  };

  return (
    <>
      <Box className={classes.root}>
        <Grid container justify="center">
          <Grid item xs={12} sm={8} md={6} component={Paper} elevation={6}>
            <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit} validationSchema={schema}>
              {({ handleSubmit, handleChange, values, errors }) => (
                <form onSubmit={handleSubmit} className={classes.form}>
                  <Typography gutterBottom component={'h1'} variant={'h4'}>
                    Create New Event/Meeting
                  </Typography>
                  <Grid container spacing={2} direction="column">
                    <Grid item>
                      <TextField
                        fullWidth
                        InputLabelProps={{ shrink: true }}
                        required
                        id="event-name"
                        label={<Typography>Event Name</Typography>}
                        name="eventName"
                        value={values.eventName}
                        onChange={handleChange}
                        helperText={errors.eventName || ''}
                        error={!!errors.eventName}
                      />
                    </Grid>
                    <Grid item>
                      <TextField
                        fullWidth
                        InputLabelProps={{ shrink: true }}
                        id="event-description"
                        label={<Typography>Event Description</Typography>}
                        name="eventDescription"
                        value={values.eventDescription}
                        onChange={handleChange}
                        helperText={errors.eventDescription || ''}
                        error={!!errors.eventDescription}
                      />
                    </Grid>
                    <Grid item>
                      <TextField
                        fullWidth
                        InputLabelProps={{ shrink: true }}
                        id="event-duration"
                        label={<Typography>Event Duration</Typography>}
                        name="eventDuration"
                        type="number"
                        value={values.eventDuration}
                        onChange={handleChange}
                        helperText={errors.eventDuration || ''}
                        error={!!errors.eventDuration}
                      />
                    </Grid>
                    <Grid item>
                      <TextField
                        InputLabelProps={{ shrink: true }}
                        fullWidth
                        id="event-url"
                        label={<Typography>Event Url</Typography>}
                        name="eventUrl"
                        value={values.eventUrl}
                        placeholder="sprint-meeting"
                        onChange={handleChange}
                        helperText={errors.eventUrl || ''}
                        error={!!errors.eventUrl}
                      />
                    </Grid>
                    <Button className={classes.button}>Create</Button>
                  </Grid>
                </form>
              )}
            </Formik>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default NewEventType;
