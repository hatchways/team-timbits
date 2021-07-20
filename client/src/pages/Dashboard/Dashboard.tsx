import { useHistory } from 'react-router-dom';

// Material-UI and Style
import CssBaseline from '@material-ui/core/CssBaseline';
import CircularProgress from '@material-ui/core/CircularProgress';

// Context
import { useAuth } from '../../context/useAuthContext';

// Components
import NavBar from '../../components/NavBar/NavBar';
import EventType from '../../components/EventType/EventType';

export default function Dashboard(): JSX.Element {
  const { loggedInUser } = useAuth();

  const history = useHistory();

  if (loggedInUser === undefined) return <CircularProgress />;
  if (!loggedInUser) {
    history.push('/login');
    return <CircularProgress />;
  }

  return (
    <>
      <CssBaseline />
      <NavBar />
    </>
  );
}

{
  /* <Container maxWidth={'lg'} component="main" className={`${classes.root} ${classes.dashboard}`}>
      <CssBaseline />
      <Grid container>
        <Grid container>
          <NavBar loggedInUser={loggedInUser} />
        </Grid>
        <Grid container>
          <EventType loggedInUser={loggedInUser} />
        </Grid>
      </Grid>
    </Container> */
}
