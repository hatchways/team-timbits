import { useEffect, useState } from 'react';
import useStyles from './useStyles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import getSingleEvent from '../../helpers/APICalls/getSingleEvent';
import { useSnackBar } from '../../context/useSnackbarContext';
import createAppointment from '../../helpers/APICalls/createAppointment';
import { useAuth } from '../../context/useAuthContext';
import { useScheduler } from '../../context/useSchedulerContext';

function Confirm(): JSX.Element {
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [appointmentDetails, setAppointmentDetails] = useState({
    name: '',
    email: '',
  });
  const theme = useTheme();
  const classes = useStyles();
  const { selectedDay, timezone, schedule, availability } = useScheduler();
  const { loggedInUser } = useAuth();
  const { updateSnackBarMessage } = useSnackBar();

  const handleConfirm = () => {
    createAppointment({
      name: appointmentDetails.name,
      email: appointmentDetails.email,
      time: selectedDay,
      url: window.location.href,
    }).then((data) => {
      if (data) {
        updateSnackBarMessage('Appointment succesfully created.');
        setIsConfirmed(true);
      } else {
        updateSnackBarMessage('Could not recieve events from backend server');
      }
    });
  };

  const handleInput = (event: any) => {
    setAppointmentDetails({ ...appointmentDetails, [event.target.name]: event.target.value });
  };

  const mdWidth = useMediaQuery(theme.breakpoints.up('md'));
  return (
    <>
      <CssBaseline />
      <Box mt={mdWidth ? 9 : 3} ml={mdWidth ? 6 : 0}>
        <Typography
          style={
            mdWidth
              ? { fontWeight: 'bold', fontSize: '1.5rem' }
              : { fontWeight: 'bold', fontSize: '1.5rem', textAlign: 'center' }
          }
        >
          Enter Details
        </Typography>
        <Box
          mt={mdWidth ? 0 : 4}
          mb={mdWidth ? 0 : 8}
          style={mdWidth ? {} : { display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        >
          <Box mt={mdWidth ? 3 : 1}>
            <Typography className={classes.text}>Name</Typography>
            <TextField
              id="outlined-basic"
              variant="outlined"
              name="name"
              className={classes.textField}
              onChange={handleInput}
            />
          </Box>
          <Box mt={1}>
            <Typography className={classes.text}>Email</Typography>
            <TextField
              id="outlined-basic"
              variant="outlined"
              name="email"
              className={classes.textField}
              onChange={handleInput}
            />
          </Box>
          <br />
          <Button className={classes.backButton} onClick={handleConfirm} disabled={isConfirmed}>
            Schedule Event
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default Confirm;
