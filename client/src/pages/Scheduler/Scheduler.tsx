import { useState, useEffect } from 'react';
import moment from 'moment-timezone';
import Calendar, { Detail } from 'react-calendar';
import { useParams } from 'react-router-dom';

// Material-UI and Style
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import useStyles from './useStyles';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

// TODO Still
// Setup api call to calendar to retrieve schedule
// Setup api call to retrieve user settings (time available and days available)
// Reference the calendar api and block off tiles that are unavailable due to booked schedule
// Api call to verify user and time which than loads the correct page
// Store calendar owner availability in cloud as utc than convert it here and display it for the user in their desired timezone
// For some reason August is appearing disabled, this is an error

// Components
import Info from '../../components/Scheduler/Info/Info';
import Time from '../../components/Scheduler/Time/Time';

function Scheduler(): JSX.Element {
  // Material-UI & Style
  const theme = useTheme();
  const classes = useStyles();

  const xsHeight = useMediaQuery('(max-height:700px)');
  const smHeight = useMediaQuery('(max-height:800px)');

  const smWidth = useMediaQuery(theme.breakpoints.up('sm'));
  const mdWidth = useMediaQuery(theme.breakpoints.up('md'));

  // Local Store

  // TEMPORARILY page is set to schedule by default as we don't have an api call yet
  const [page, setPage] = useState<string>('schedule');
  // Day selected on calendar by user
  const [selectedDay, setSelectedDay] = useState<Date | undefined>();

  // Timezone of user
  const [timezone, setTimezone] = useState<string>(moment.tz.guess());

  // This value need to be retrieved from Google Calendar API
  // This is the users current schedule
  const [schedule, setSchedule] = useState<Array<Date>>([]);

  // Placeholder, the users preferences should come from the predefined user settings
  const availability: Array<string> = ['Saturday', 'Sunday'];
  const [hours, setHours] = useState<Record<string, Array<string>>>({
    Sunday: ['0:00', '23:59'],
    Saturday: ['0:00', '23:59'],
    Monday: ['0:00', '23:59'],
    Tuesday: ['0:00', '23:59'],
    Wednesday: ['0:00', '23:59'],
    Thursday: ['0:00', '23:59'],
    Friday: ['0:00', '23:59'],
  });

  // Retrieve meeting length & user from url
  const { username, time }: { username: string; time: string } = useParams();
  const withoutLetters = time.replace(/[A-z]/g, '');

  const checkAvailability = (date: Date, view: Detail) => {
    // Checks if the day is set unavailable from users settings
    if (availability.indexOf(moment(date).format('dddd')) !== -1) return true;
    else return false;
    //unavailable.findIndex(moment(date).format('dddd')) ? true : false;
    // const x = moment(date).format('dddd');
    // console.log(x);
    // ({ date, view }) =>
    //                     view === 'month' && // Block day tiles only
    //                     disabledDates.some(
    //                       (disabledDate) =>
    //                         date.getFullYear() === disabledDate.getFullYear() &&
    //                         date.getMonth() === disabledDate.getMonth() &&
    //                         date.getDate() === disabledDate.getDate(),
    //                     )
  };

  //useEffect(() => {
  // insert API call here to ensure both user and time in url are valid
  //parseInt(time) && API CALL TO CHECK USER  ? setPage('schedule') : setPage('error');
  //}, [time]);

  const handleChange = (event: any) => {
    setTimezone(event.target.value);
  };

  switch (page) {
    case 'error':
      return <h1>OOOPS</h1>;
    case 'schedule':
      return (
        <>
          <CssBaseline />
          <Container className={classes.root}>
            <Box
              style={mdWidth ? { height: '85vh' } : smWidth ? { height: '95vh' } : { height: '100vh' }}
              mt={xsHeight ? 10 : smHeight ? 6 : 0}
              mb={xsHeight ? 10 : smHeight ? 6 : 0}
              display="flex"
              alignItems="center"
            >
              <Grid container className={mdWidth ? classes.mdWrapper : classes.xsWrapper} justify="center">
                <Info
                  username={username}
                  time={withoutLetters}
                  selectedDay={selectedDay}
                  mdWidth={mdWidth}
                  smWidth={smWidth}
                  timezone={timezone}
                  meeting={undefined}
                />
                <Grid
                  item
                  md={4}
                  sm={6}
                  xs={12}
                  className={smWidth ? classes.block : selectedDay ? classes.none : classes.block}
                >
                  <Box mt={smWidth ? 9 : 7} ml={smWidth ? 6 : 0} pb={mdWidth ? 0 : 10} pl={smWidth ? 0 : 1}>
                    <Typography
                      style={{ fontSize: '1.5rem', fontWeight: 'bold' }}
                      className={smWidth ? classes.normalText : classes.centerText}
                    >
                      Select a Date & Time
                    </Typography>
                    <Calendar
                      minDetail={'year'}
                      next2Label={null}
                      prev2Label={null}
                      showNeighboringMonth={false}
                      minDate={new Date()}
                      onClickDay={(value, event) => setSelectedDay(value)}
                      tileDisabled={({ date, view }) => checkAvailability(date, view)}
                    />
                    <Box display="flex" justifyContent={smWidth ? 'left' : 'center'}>
                      <FormControl className={classes.formControl}>
                        <Select
                          value={timezone}
                          onChange={handleChange}
                          name="age"
                          inputProps={{ 'aria-label': 'age' }}
                        >
                          {moment.tz.names().map((tz) => (
                            <MenuItem value={tz} key={tz}>
                              {tz}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Box>
                  </Box>
                </Grid>

                <Grid
                  item
                  md={4}
                  sm={6}
                  xs={12}
                  className={`${
                    smWidth
                      ? selectedDay
                        ? classes.hidden
                        : classes.invisible
                      : selectedDay
                      ? classes.block
                      : classes.none
                  } ${mdWidth ? classes.mdFlow : smWidth ? classes.smFlow : classes.xsFlow}`}
                >
                  <Box mt={smWidth ? 16 : 7} ml={smWidth ? 6 : 0} pb={smWidth ? 0 : 10} pl={smWidth ? 0 : 1}>
                    <Time
                      setSelectedDay={() => {
                        setSelectedDay(undefined);
                      }}
                      selectedDay={selectedDay}
                      timezone={timezone}
                      schedule={schedule}
                      hours={hours}
                      time={time}
                      smWidth={smWidth}
                      username={username}
                      mdWidth={mdWidth}
                      timeNoLetters={withoutLetters}
                    />
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </>
      );
    default:
      return <CircularProgress />;
  }
}

export default Scheduler;
