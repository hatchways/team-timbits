import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

// Material-UI and Style
import useStyles from './useStyles';
import { CssBaseline, CircularProgress, Container, Box, Button, Typography } from '@material-ui/core';

// Context
import { useAuth } from '../../context/useAuthContext';
import { useSettings } from '../../context/useSettingsContext';

// Components
import NavBar from '../../components/NavBar/NavBar';
import EventType from '../../components/EventType/EventType';

function Dashboard(): JSX.Element {
  const classes = useStyles();
  const { loggedInUser } = useAuth();
  const { settings, updateDatabase } = useSettings();
  const [view, setView] = useState<boolean>(false);

  const history = useHistory();

  useEffect(() => {
    if (settings) updateDatabase();
  }, [settings, updateDatabase]);

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

  return (
    <Box>
      <CssBaseline />
      <NavBar />
      <Box mt={10}>
        <Container>
          <Typography className={classes.header}>My CalendApp</Typography>
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
        {!view ? <EventType /> : <h1>Goodbye</h1>}
      </Box>
    </Box>
  );
}

export default Dashboard;
