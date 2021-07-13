import useStyles from './useStyles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';

import moment from 'moment-timezone';

import Info from '../Scheduler/Info/Info';

interface ConfirmProps {
  username: string;
  time: string;
  selectedDay: Date | undefined;
  mdWidth: boolean;
  smWidth: boolean;
  timezone: string;
  meeting: string | undefined;
}

function Confirm({ username, time, selectedDay, mdWidth, smWidth, timezone, meeting }: ConfirmProps): JSX.Element {
  const classes = useStyles();
  const meetingFormat = `${meeting}, ${moment(selectedDay).format('dddd, MMMM DD, yyyy')}`;

  return (
    <>
      <CssBaseline />
      <Container className={classes.root}>
        <Box style={{ height: '85vh' }} display="flex" alignItems="center">
          <Grid container justify="center" className={classes.mdWrapper}>
            <Info
              username={username}
              time={time}
              selectedDay={selectedDay}
              mdWidth={mdWidth}
              smWidth={smWidth}
              timezone={timezone}
              meeting={meetingFormat}
            />
            <Grid item md={8}>
              <Typography>Enter Details</Typography>
              <Typography>Name</Typography>
              <TextField id="outlined-basic" variant="outlined" />
              <Typography>Email</Typography>
              <TextField id="outlined-basic" variant="outlined" />
              <br />
              <Button>Schedule Event</Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}

export default Confirm;
