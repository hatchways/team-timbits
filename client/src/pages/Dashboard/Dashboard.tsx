import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

// Material-UI and Style
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import CircularProgress from '@material-ui/core/CircularProgress';
import useStyles from './useStyles';

// Context
import { useAuth } from '../../context/useAuthContext';
import { useSocket } from '../../context/useSocketContext';

// Components
import NavBar from '../../components/NavBar/NavBar';
import EventType from '../../components/EventType/EventType';

export default function Dashboard(): JSX.Element {
  const classes = useStyles();

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
    <Container maxWidth={'lg'} component="main" className={`${classes.root} ${classes.dashboard}`}>
      <CssBaseline />
      <Grid container>
        <Grid container>
          <NavBar loggedInUser={loggedInUser} />
        </Grid>
        <Grid container>
          <EventType loggedInUser={loggedInUser} />
        </Grid>
      </Grid>
    </Container>
  );
}
