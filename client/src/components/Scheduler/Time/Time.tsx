import { useState } from 'react';
import useStyles from './useStyles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Modal from '@material-ui/core/Modal';

import moment from 'moment-timezone';

import Confirm from '../../Confirm/Confirm';

interface TimeProps {
  selectedDay: Date | undefined;
  timezone: string;
  schedule: Array<Date>;
  hours: Record<string, Array<string>>;
  time: string;
  smWidth: boolean;
  setSelectedDay: any;
  username: string;
  mdWidth: boolean;
  timeNoLetters: string;
}

function Time({
  selectedDay,
  timezone,
  schedule,
  hours,
  time,
  smWidth,
  setSelectedDay,
  username,
  mdWidth,
  timeNoLetters,
}: TimeProps): JSX.Element {
  const classes = useStyles();
  const [open, setOpen] = useState<boolean>(false);
  const [meeting, setMeeting] = useState<string | undefined>();
  const day: string = moment(selectedDay).format('dddd');

  // Dummy data for now, once the calendar api is incorporated the actual values will be passed to the modal
  const handleOpen = () => {
    setOpen(true);
    setMeeting('9:45 - 10:00');
  };

  const handleClose = () => {
    setOpen(false);
  };

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
        <Button className={classes.button} onClick={handleOpen}>
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
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <Confirm
          username={username}
          time={timeNoLetters}
          selectedDay={selectedDay}
          mdWidth={mdWidth}
          smWidth={smWidth}
          timezone={timezone}
          meeting={meeting}
        />
      </Modal>
    </Box>
  );
}
export default Time;
