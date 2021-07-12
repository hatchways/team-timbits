// Material-UI and Style
import { CircularProgress } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import NavBar from '../../components/NavBar/NavBar';
import EventMaker from '../../components/EventMaker/EventMaker';
import { useAuth } from '../../context/useAuthContext';

export default function Dashboard(): JSX.Element {
  const { loggedInUser } = useAuth();

  if (loggedInUser === undefined) return <CircularProgress />;
  if (!loggedInUser) {
    return <CircularProgress />;
  }
  return (
    <Container maxWidth={'lg'} component="main">
      <CssBaseline />
      <NavBar loggedInUser={loggedInUser} />
      <EventMaker />
    </Container>
  );
}
