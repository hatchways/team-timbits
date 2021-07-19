import useStyles from './useStyles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import PublicIcon from '@material-ui/icons/Public';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import { useParams } from 'react-router-dom';

import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import moment from 'moment-timezone';

import { useScheduler } from '../../../context/useSchedulerContext';

function Info(): JSX.Element {
  const theme = useTheme();
  const classes = useStyles();

  const smWidth = useMediaQuery(theme.breakpoints.up('sm'));
  const mdWidth = useMediaQuery(theme.breakpoints.up('md'));

  const { selectedDay, updateSelectedDayContext, timezone, modal, updateModalContext, meeting } = useScheduler();

  const { username, time }: { username: string; time: string } = useParams();
  const withoutLetters = time.replace(/[A-z]/g, '');

  const weekday = moment(selectedDay).format('dddd');
  const day = moment(selectedDay).format('MMMM DD, yy');

  return (
    <Grid item md={4} xs={12} className={`${mdWidth ? classes.mdScreen : classes.xsScreen}`}>
      {/* Button to either close the modal or if a small viewport than to return to the calendar view */}
      <Box
        zIndex="tooltip"
        className={modal || (!smWidth && selectedDay) ? classes.absolute : classes.none}
        mt={3}
        ml={3}
      >
        <ArrowBackIosIcon
          onClick={() => (modal ? updateModalContext(false) : updateSelectedDayContext(undefined))}
          className={classes.backButton}
        />
      </Box>
      <Box position="relative" zIndex="modal" mt={mdWidth ? 9 : 3} ml={mdWidth ? 6 : 0} pb={mdWidth ? 0 : 3}>
        <Typography className={`${mdWidth ? classes.mdUsername : classes.xsUsername}`}>
          {smWidth ? username : modal ? '' : selectedDay ? weekday : username}
        </Typography>
        <Typography className={`${mdWidth ? classes.mdTime : classes.xsTime}`}>
          {smWidth
            ? `${withoutLetters} minute meeting`
            : modal
            ? `${withoutLetters} minute meeting`
            : selectedDay
            ? day
            : `${withoutLetters} minute meeting`}
        </Typography>

        <Box mt={1} className={`${mdWidth ? classes.mdBox : classes.xsBox}`}>
          {smWidth ? (
            <Grid
              container
              justifyContent={smWidth ? 'center' : modal ? 'flex-start' : 'center'}
              spacing={mdWidth ? 1 : 0}
            >
              <Grid item md={1}>
                <AccessTimeIcon style={{ fontSize: '1.5rem' }} />
              </Grid>
              <Grid item md={11}>
                <Typography className={classes.meetingLength}> {withoutLetters} min</Typography>
              </Grid>

              {modal ? (
                <>
                  <Grid item md={1} style={!mdWidth && smWidth ? { paddingLeft: '1.25rem', height: '2.188rem' } : {}}>
                    <CalendarTodayIcon style={{ fontSize: '1.5rem' }} />
                  </Grid>
                  <Grid item md={11}>
                    <Typography className={classes.meetingLength} noWrap={false}>
                      {meeting}, {weekday}, {day}
                    </Typography>
                  </Grid>
                  <Grid sm={12}></Grid>
                  <Grid item md={1}>
                    <PublicIcon style={{ fontSize: '1.5rem' }} />
                  </Grid>
                  <Grid item md={11}>
                    <Typography className={classes.meetingLength}>{timezone}</Typography>
                  </Grid>
                </>
              ) : (
                <></>
              )}
            </Grid>
          ) : modal ? (
            <Grid container style={{ marginLeft: '0.7rem', marginTop: '0.5rem' }}>
              <Grid item xs={1} style={{ height: '2.188rem' }}>
                <AccessTimeIcon style={{ fontSize: '1.5rem' }} />
              </Grid>
              <Grid item xs={11}>
                <Typography className={classes.meetingLength}> {withoutLetters} min</Typography>
              </Grid>
              <Grid item xs={1} style={{ height: '2.188rem' }}>
                <CalendarTodayIcon style={{ fontSize: '1.5rem' }} />
              </Grid>
              <Grid item xs={11}>
                <Typography className={classes.meetingLength} noWrap={false}>
                  {meeting}, {weekday}, {day}
                </Typography>
              </Grid>
              <Grid item xs={1}>
                <PublicIcon style={{ fontSize: '1.5rem' }} />
              </Grid>
              <Grid item xs={11}>
                <Typography className={classes.meetingLength}>{timezone}</Typography>
              </Grid>
            </Grid>
          ) : selectedDay ? (
            <>
              <Grid item md={1}>
                <PublicIcon style={{ fontSize: '1.5rem' }} />
              </Grid>
              <Grid item md={11}>
                <Typography className={classes.meetingLength}>{timezone}</Typography>
              </Grid>
            </>
          ) : (
            <>
              <Grid item md={1}>
                <AccessTimeIcon style={{ fontSize: '1.5rem' }} />
              </Grid>
              <Grid item md={11}>
                <Typography className={classes.meetingLength}> {withoutLetters} min</Typography>
              </Grid>
            </>
          )}
        </Box>
      </Box>
    </Grid>
  );
}

export default Info;
