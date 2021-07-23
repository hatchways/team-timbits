import React, { useEffect, useState } from 'react';

// Material-UI and Style
import Typography from '@material-ui/core/Typography';
import { Box, Button, Grid, Paper } from '@material-ui/core';
import useStyles from '../Meeting/useStyles';
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
    getScheduledAppointments(loggedInUser?.mongoId || '').then((data) => {
      if (data) {
        console.log('🚀 ~ getScheduledAppointments ~ data', data);
        setAppointments(data);
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
    <Grid container xs={12} className={classes.meetingContainer} spacing={3}>
      {appointments.length &&
        appointments.map((eachAppointment: any, index: number) => (
          <Grid key={index} item xs={12} md={4}>
            <Grid className={classes.cardStylingBar}></Grid>
            <Paper className={classes.meetingCard}>
              <Box marginBottom={2} textAlign="left">
                <Box display="flex" justifyContent="flex-end">
                  <SettingsIcon />
                </Box>
                <Box paddingX={2}>
                  <Typography variant="h5" className={classes.title}>
                    {'eachEvent.name'}
                  </Typography>
                  <Typography variant="body1">{'eachEvent.description'}</Typography>
                </Box>
              </Box>
              <Grid>
                <Divider className={classes.divider} />
                <Grid container className={classes.cardFooter}>
                  <Box display="flex" alignItems="center">
                    <ScheduleIcon />
                    <Typography variant="h5">{'eachEvent.duration'}</Typography>
                  </Box>
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={() => copyToClipBoard('eachEvent.url')}
                    className={classes.copyLinkButton}
                  >
                    Copy Link
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        ))}
    </Grid>
  );
};

export default ScheduledAppointments;
