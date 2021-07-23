import { useState } from 'react';
import { useHistory } from 'react-router-dom';

// Material-UI and Style
import useStyles from './useStyles';
import { CssBaseline, CircularProgress, Container, Box, Button, Typography } from '@material-ui/core';

// Context
import { useAuth } from '../../context/useAuthContext';

// Components
import NavBar from '../../components/NavBar/NavBar';
import EventType from '../../components/EventType/EventType';

import axios from 'axios';
import ScheduledAppointments from '../../components/ScheduledAppointments';

function Dashboard(): JSX.Element {
  const classes = useStyles();

  const { loggedInUser } = useAuth();
  const [view, setView] = useState<boolean>(false);

  const history = useHistory();

  if (loggedInUser === undefined) {
    return (
      <Box style={{ height: '100vh', width: '100vw' }} display="flex" justifyContent="center" alignItems="center">
        <CircularProgress size="5rem" />
      </Box>
    );
  }
  if (!loggedInUser) {
    history.push('/login');
    return (
      <Box style={{ height: '100vh', width: '100vw' }} display="flex" justifyContent="center" alignItems="center">
        <CircularProgress size="5rem" />
      </Box>
    );
  }

  const handleClick = () => {
    axios
      .get('/profile', { params: { id: loggedInUser?.mongoId }, withCredentials: true })
      .then((res) => console.log(res));
  };

  return (
    <Box>
      <CssBaseline />
      <NavBar />
      <Box>
        <Container>
          <Button
            disableRipple={true}
            className={!view ? classes.buttonSelected : classes.buttonNotSelected}
            style={{ marginRight: '1rem' }}
            onClick={() => setView(false)}
          >
            Event Types
          </Button>
          <Button
            disableRipple={true}
            className={!view ? classes.buttonNotSelected : classes.buttonSelected}
            onClick={() => setView(true)}
          >
            Scheduled Events
          </Button>
        </Container>
        {!view ? <EventType /> : <ScheduledAppointments />}
      </Box>
    </Box>
  );
}

export default Dashboard;
