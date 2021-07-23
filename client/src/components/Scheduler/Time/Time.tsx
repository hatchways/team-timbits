import useStyles from './useStyles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import Button from '@material-ui/core/Button';

import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useParams } from 'react-router-dom';

import moment from 'moment-timezone';

import { useScheduler } from '../../../context/useSchedulerContext';

function Time(): JSX.Element {
  const theme = useTheme();
  const classes = useStyles();

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

  const smWidth = useMediaQuery(theme.breakpoints.up('sm'));

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
      {/* This is the design of the button, once the api is integrated use a map function to assign each time with the following structure */}
      <Box mt={smWidth ? 3 : 2}>
        <Button
          className={classes.button}
          onClick={() => {
            updateMeetingContext('9:45 - 10:00');
            updateModalContext(true);
          }}
        >
          <FiberManualRecordIcon
            color="primary"
            fontSize="small"
            style={{ position: 'absolute', marginRight: '5rem' }}
          />
          9:45
        </Button>
      </Box>
    </Box>
  );
}
export default Time;
