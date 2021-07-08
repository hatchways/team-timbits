import { Formik } from 'formik';
import useStyles from './useStyles';
import { Grid, Box, TextField, Typography, Button, Paper } from '@material-ui/core';
import NavBar from '../NavBar/NavBar';
import createEvent from './../../helpers/APICalls/createMeeting';
import { Event } from '../../interface/Event';
import { useHistory } from 'react-router-dom';

const defaultFormValues = {
  eventName: '',
  eventDescription: '',
  eventDuration: '',
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
  const classes = useStyles();
  const history = useHistory();

  const handleFormSubmit = ({ eventName, eventDescription, eventUrl, eventDuration }: Event) => {
    createEvent({ eventName, eventDescription, eventUrl, eventDuration }).then((data) => {
      if (data.success) {
        history.push('/dashboard');
      }
      //TODO catch error
    });
  };

  return (
    <>
      <NavBar loggedInUser={{ username: 'fatih', email: 'email@email.com' }} />
      <Box className={classes.root}>
        <Grid container justify="center">
          <Grid item xs={12} sm={8} md={6} component={Paper} elevation={6}>
            <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit}>
              {({ handleSubmit, handleChange, values }) => (
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
