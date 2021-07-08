import { useParams } from 'react-router-dom';

// Material-UI and Style
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import useStyles from './useStyles';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import AccessTimeOutlinedIcon from '@material-ui/icons/AccessTimeOutlined';
import Typography from '@material-ui/core/Typography';

function Scheduler(): JSX.Element {
  const theme = useTheme();
  const classes = useStyles();
  const matches = useMediaQuery(theme.breakpoints.up('lg'));

  // Retrieve desired meeting length from url minus min
  const { username, time }: { username: string; time: string } = useParams();
  const withoutLetters = time.replace(/[A-z]/g, '');

  return (
    <>
      <CssBaseline />
      <Container className={classes.root}>
        <Grid container className={classes.pageHeight} alignItems="center">
          <Grid item xs={12}>
            <Paper elevation={3}>
              <Grid container>
                <Grid item lg={6} xs={12} className={matches ? classes.right : classes.bottom}>
                  <Container>
                    <Typography variant="h6">{username}</Typography>
                    <Typography variant="h4">{withoutLetters} minute meeting</Typography>
                    <Grid container spacing={1} alignItems="flex-end">
                      <Grid item>
                        <AccessTimeOutlinedIcon fontSize="medium" />
                      </Grid>
                      <Grid item>
                        <Typography variant="h6"> {withoutLetters} min</Typography>
                      </Grid>
                    </Grid>
                  </Container>
                </Grid>
                <Grid item lg={6} xs={12}>
                  <Container>
                    <Typography variant="h4">Select a Date & Time</Typography>
                  </Container>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Scheduler;
