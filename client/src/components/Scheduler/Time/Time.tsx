import { useState, useCallback } from 'react';
import useStyles from './useStyles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import Button from '@material-ui/core/Button';

import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useParams } from 'react-router-dom';

import moment from 'moment-timezone';

//Context
import { useSettings } from '../../../context/useSettingsContext';
import { useScheduler } from '../../../context/useSchedulerContext';

function Time(): JSX.Element {
  const theme = useTheme();
  const classes = useStyles();
  const smWidth = useMediaQuery(theme.breakpoints.up('sm'));

  const { hours, userTimezone } = useSettings();

  const [increments, setIncrements] = useState<Array<string>>([]);

  const {
    selectedDay,
    updateSelectedDayContext,
    timezone,
    schedule,
    availability,
    updateAvailabilityContext,
    modal,
    updateModalContext,
    updateMeetingContext,
  } = useScheduler();

  const { time }: { username: string; time: string } = useParams();
  const withoutLetters = time.replace(/[A-z]/g, '');

  let timeA;
  let timeB;

  if (hours === undefined) {
    timeA = '0:00';
    timeB = '23:59';
  } else {
    timeA = hours[0];
    timeB = hours[1];
  }

  let userTZA;
  let userTZB;
  let guestTZA;
  let guestTZB;

  if (timezone !== undefined && userTimezone !== undefined) {
    userTZA = moment.tz(`${moment(selectedDay).format('YYYY-MM-DD')} ${timeA}`, userTimezone);
    userTZB = moment.tz(`${moment(selectedDay).format('YYYY-MM-DD')} ${timeB}`, userTimezone);
    guestTZA = userTZA.clone().tz(timezone).format('DD-MM-YYYY HH:mm:ss A');
  }

  const startTime: moment.Moment = moment(new Date(`1/1/2021 ${timeA}`));
  const endTime: moment.Moment = moment(new Date(`1/1/2021 ${timeB}`));

  const timeButtons = useCallback(
    (startTime: moment.Moment, endTime: moment.Moment) => {
      const timeIncrements: Array<string> = [];
      const duration = parseInt(withoutLetters);
      while (startTime.isBefore(endTime)) {
        const time = startTime.format('HH:mm');
        timeIncrements.push(time);
        startTime = startTime.add(duration, 'm');
      }
      setIncrements(timeIncrements);
    },
    [withoutLetters],
  );

  const [render, setRender] = useState<boolean>(true);

  if (render) {
    timeButtons(startTime, endTime);
    setRender(false);
  }

  return (
    <Box display={smWidth ? 'block' : 'flex'} flexDirection="column" alignItems="center">
      <Typography
        className={smWidth ? classes.textNormal : classes.textCenter}
        style={{
          fontSize: '1.1rem',
          fontWeight: 300,
          opacity: '0.75',
          color: 'gray',
        }}
      >
        {smWidth ? moment(selectedDay).format('dddd, MMMM DD') : 'Select a time'}
      </Typography>
      {increments.map((incTime) => (
        <Box key={incTime} mt={smWidth ? 3 : 2}>
          <Button
            className={classes.button}
            onClick={() => {
              updateMeetingContext(incTime);
              updateModalContext(true);
            }}
          >
            <FiberManualRecordIcon
              color="primary"
              fontSize="small"
              style={{ position: 'absolute', marginRight: '5rem' }}
            />
            {incTime}
          </Button>
        </Box>
      ))}
    </Box>
  );
}
export default Time;
