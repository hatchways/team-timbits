import React, { useEffect, useState } from 'react';

// Material-UI and Style
import Typography from '@material-ui/core/Typography';
import { Box, Button, Grid, Paper } from '@material-ui/core';
import useStyles from '../Meeting/useStyles';
import SettingsIcon from '@material-ui/icons/Settings';
import Divider from '@material-ui/core/Divider';
import ScheduleIcon from '@material-ui/icons/Schedule';
import AddIcon from '@material-ui/icons/Add';
import fetchEvents from './../../helpers/APICalls/fetchEvents';

// Components
import AvatarDisplay from '../AvatarDisplay/AvatarDisplay';

// Interface
import { User } from '../../interface/User';
import { useSnackBar } from '../../context/useSnackbarContext';

interface Props {
  loggedInUser: User;
  handleDrawerToggle?: () => void;
}

const circularColorPicker = (index: number) => {
  const colors = ['#7900FF', '#89B800', '#FF7000'];
  const currentIndex = index % 3;
  return colors[currentIndex];
};

const Meetings = ({ loggedInUser }: Props): JSX.Element => {
  const { updateSnackBarMessage } = useSnackBar();
  const classes = useStyles();
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents().then((data) => {
      if (data.success) {
        setEvents(data.success);
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
    <Box>
      <Grid container xs={12} direction="row" className={classes.profileSection}>
        <Grid item>
          <Grid container>
            <Box>
              <AvatarDisplay loggedIn user={loggedInUser} />
            </Box>
            <Box marginLeft={2}>
              <Typography component="h3" className={classes.title}>
                {loggedInUser.username}
              </Typography>
              <Typography variant="subtitle1">{loggedInUser.email}</Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container>
            <Button variant="outlined" color="primary" className={classes.newEventButton} startIcon={<AddIcon />}>
              <Typography variant="h6">New Event</Typography>
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Divider className={classes.divider} />
      <Grid container xs={12} className={classes.meetingContainer} spacing={3}>
        {events?.map((eachEvent: any, index: number) => (
          <Grid key={eachEvent.id} item xs={12} md={4}>
            <Grid className={classes.cardStylingBar} style={{ backgroundColor: circularColorPicker(index) }}></Grid>
            <Paper className={classes.meetingCard}>
              <Box marginBottom={2} textAlign="left">
                <Box display="flex" justifyContent="flex-end">
                  <SettingsIcon />
                </Box>
                <Box paddingX={2}>
                  <Typography variant="h5" className={classes.title}>
                    {eachEvent.name}
                  </Typography>
                  <Typography variant="body1">{eachEvent.description}</Typography>
                </Box>
              </Box>
              <Grid>
                <Divider className={classes.divider} />
                <Grid container className={classes.cardFooter}>
                  <Box display="flex" alignItems="center">
                    <ScheduleIcon />
                    <Typography variant="h5">{eachEvent.duration}</Typography>
                  </Box>
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={() => copyToClipBoard(eachEvent.url)}
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
    </Box>
  );
};

export default Meetings;
