import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
// Material-UI and Style
import Typography from '@material-ui/core/Typography';
import { Box, Button, Grid, Paper } from '@material-ui/core';
import useStyles from './useStyles';
import SettingsIcon from '@material-ui/icons/Settings';
import Divider from '@material-ui/core/Divider';
import ScheduleIcon from '@material-ui/icons/Schedule';
import { useAuth } from '../../context/useAuthContext';
// Components
import AvatarDisplay from '../AvatarDisplay/AvatarDisplay';

// Interface
import { useSnackBar } from '../../context/useSnackbarContext';
import { Link } from 'react-router-dom';
import getScheduledAppointments from '../../helpers/APICalls/getScheduledAppointments';

const ScheduledAppointments = (): JSX.Element => {
  const { loggedInUser } = useAuth();
  const { updateSnackBarMessage } = useSnackBar();
  const classes = useStyles();
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    getScheduledAppointments(loggedInUser?.mongoId).then((data) => {
      if (data) {
        console.log('🚀 ~ getScheduledAppointments ~ data', data);
        setAppointments(data.success);
      } else {
        updateSnackBarMessage('Could not recieve events from backend server');
      }
    });
    // eslint-disable-next-line
  }, []);

  const copyToClipBoard = (url: string) => {
    navigator.clipboard.writeText(url);
  };
  return (
    <Grid container justifyContent="center">
      {appointments?.length &&
        appointments.map((eachAppointment: any, index: number) => (
          <Grid key={index} item xs={12} md={8} style={{ margin: '1rem' }}>
            <Grid className={classes.cardStylingBar}></Grid>
            <Paper className={classes.meetingCard}>
              <Box textAlign="left">
                <Box paddingX={1}>
                  <Typography variant="h5" className={classes.title}>
                    {eachAppointment.name}
                  </Typography>
                  <Typography variant="h5" className={classes.title}>
                    {dayjs(eachAppointment.time).format('HH:mm YYYY-MM-DD')}
                  </Typography>
                  <Typography variant="body1">Event: {eachAppointment.eventName}</Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>
        ))}
    </Grid>
  );
};

export default ScheduledAppointments;
