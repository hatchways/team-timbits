// Material-UI and Style
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import useStyles from './useStyles';
// Components
import NavBar from '../../components/NavBar/NavBar';
import EventType from '../../components/EventType/EventType';

export default function Dashboard(): JSX.Element {
  const classes = useStyles();

  return (
    <Container maxWidth={'lg'} component="main" className={`${classes.root} ${classes.dashboard}`}>
      <CssBaseline />
      <Grid container>
        <Grid container>
          <NavBar />
        </Grid>
        <Grid container>
          <EventType />
        </Grid>
      </Grid>
    </Container>
  );
}
