import useStyles from './useStyles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import moment from 'moment-timezone';

interface TimeProps {
  selectedDay: Date | undefined;
  timezone: string;
  schedule: Array<Date>;
  hours: Record<string, Array<string>>;
  time: string;
  smWidth: boolean;
  setSelectedDay: any;
}

function Time({ selectedDay, timezone, schedule, hours, time, smWidth, setSelectedDay }: TimeProps): JSX.Element {
  const classes = useStyles();
  const day: string = moment(selectedDay).format('dddd');
  return (
    <Box display={smWidth ? 'block' : 'flex'} flexDirection="column" alignItems="center">
      <Box display={smWidth ? 'block' : 'flex'} flexDirection="row" alignItems="center">
        <ArrowBackIosIcon
          onClick={() => setSelectedDay()}
          className={`${smWidth ? classes.none : classes.block} ${classes.backButton}`}
        />
        <Typography
          className={smWidth ? classes.textNormal : classes.textCenter}
          style={{
            fontSize: '1.1rem',
            fontWeight: 300,
            opacity: '0.75',
            color: 'gray',
            width: 'auto',
            lineHeight: '2rem',
          }}
        >
          {moment(selectedDay).format('dddd, MMMM DD')}
        </Typography>
      </Box>
      {/* color is dependant on whether the user is available or not */}
      <Box mt={smWidth ? 4 : 2}>
        <Button className={classes.button}>
          <Grid container>
            <Grid item xs={5} className={classes.icon}>
              <FiberManualRecordIcon color="primary" fontSize="small" />
            </Grid>
            <Grid item xs={7} className={classes.text}>
              9:45
            </Grid>
          </Grid>
        </Button>
      </Box>
      <Box mt={smWidth ? 2 : 2}>
        <Button className={classes.button}>
          <Grid container>
            <Grid item xs={5} className={classes.icon}>
              <FiberManualRecordIcon color="primary" fontSize="small" />
            </Grid>
            <Grid item xs={7} className={classes.text}>
              9:45
            </Grid>
          </Grid>
        </Button>
      </Box>
      <Box mt={smWidth ? 2 : 2}>
        <Button className={classes.button}>
          <Grid container>
            <Grid item xs={5} className={classes.icon}>
              <FiberManualRecordIcon color="primary" fontSize="small" />
            </Grid>
            <Grid item xs={7} className={classes.text}>
              9:45
            </Grid>
          </Grid>
        </Button>
      </Box>
      <Box mt={smWidth ? 2 : 2}>
        <Button className={classes.button}>
          <Grid container>
            <Grid item xs={5} className={classes.icon}>
              <FiberManualRecordIcon color="primary" fontSize="small" />
            </Grid>
            <Grid item xs={7} className={classes.text}>
              9:45
            </Grid>
          </Grid>
        </Button>
      </Box>
      <Box mt={smWidth ? 2 : 2}>
        <Button className={classes.button}>
          <Grid container>
            <Grid item xs={5} className={classes.icon}>
              <FiberManualRecordIcon color="primary" fontSize="small" />
            </Grid>
            <Grid item xs={7} className={classes.text}>
              9:45
            </Grid>
          </Grid>
        </Button>
      </Box>
      <Box mt={smWidth ? 2 : 2}>
        <Button className={classes.button}>
          <Grid container>
            <Grid item xs={5} className={classes.icon}>
              <FiberManualRecordIcon color="primary" fontSize="small" />
            </Grid>
            <Grid item xs={7} className={classes.text}>
              9:45
            </Grid>
          </Grid>
        </Button>
      </Box>
    </Box>
  );
}
export default Time;
