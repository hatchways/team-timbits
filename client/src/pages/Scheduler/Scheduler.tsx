import { useState } from 'react';
import moment from 'moment-timezone';
import Calendar, { Detail } from 'react-calendar';

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

import { useScheduler } from '../../context/useSchedulerContext';

// Components
import Info from '../../components/Scheduler/Info/Info';
import Time from '../../components/Scheduler/Time/Time';
import Confirm from '../../components/Confirm/Confirm';

function Scheduler(): JSX.Element {
  // Material-UI & Style
  const theme = useTheme();
  const classes = useStyles();

  const xsHeight = useMediaQuery('(max-height:600px)');
  const smHeight = useMediaQuery('(max-height:650px)');
  const mdHeight = useMediaQuery('(max-height:700px)');

  const smWidth = useMediaQuery(theme.breakpoints.up('sm'));
  const mdWidth = useMediaQuery(theme.breakpoints.up('md'));

  const {
    selectedDay,
    updateSelectedDayContext,
    timezone,
    updateTimezoneContext,
    schedule,
    updateScheduleContext,
    availability,
    updateAvailabilityContext,
    modal,
    updateModalContext,
  } = useScheduler();

  const [page, setPage] = useState<string>('schedule');

  const checkAvailability = (date: Date, view: Detail) => {
    if (availability[moment(date).format('dddd')].length === 0) return true;
    else return false;
  };

  const handleChange = (event: any) => {
    updateTimezoneContext(event.target.value);
  };

  switch (page) {
    case 'error':
      return <h1>Error</h1>;
    case 'schedule':
      return (
        <>
          <CssBaseline />
          <Container className={classes.root}>
            <Box
              display="flex"
              alignItems="center"
              mt={xsHeight ? 8 : smHeight ? 4 : mdHeight ? 2 : 0}
              mb={xsHeight ? 8 : smHeight ? 4 : mdHeight ? 2 : 0}
              style={mdWidth ? { height: '85vh' } : smWidth ? { height: '95vh' } : { height: '100vh' }}
            >
              <Grid
                container
                justify="center"
                className={mdWidth ? classes.mdWrapper : smWidth ? classes.smWrapper : classes.xsWrapper}
              >
                <Info />
                {!modal ? (
                  <>
                    <Grid
                      item
                      md={4}
                      sm={6}
                      xs={12}
                      className={smWidth ? classes.block : selectedDay ? classes.none : classes.block}
                    >
                      <Box mt={mdWidth ? 9 : 3} ml={smWidth ? 6 : 2} mb={mdWidth ? 0 : 3}>
                        <Typography
                          style={{ fontSize: '1.2rem', fontWeight: 'bold', marginRight: '16px', textAlign: 'center' }}
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
                          onClickDay={(value, event) => updateSelectedDayContext(value)}
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
                      <Box mt={mdWidth ? 16 : smWidth ? 10 : 3} ml={smWidth ? 6 : 0}>
                        <Time />
                      </Box>
                    </Grid>
                  </>
                ) : (
                  <Grid item md={8} xs={12}>
                    <Confirm />
                  </Grid>
                )}
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
