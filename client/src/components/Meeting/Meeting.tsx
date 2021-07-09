import React, { useEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import { Box, Button, Grid, GridSpacing, Paper } from '@material-ui/core';
import AvatarDisplay from '../AvatarDisplay/AvatarDisplay';
import { User } from '../../interface/User';
import useStyles from '../Meeting/useStyles';
import SettingsIcon from '@material-ui/icons/Settings';
import Divider from '@material-ui/core/Divider';
import ScheduleIcon from '@material-ui/icons/Schedule';
import AddIcon from '@material-ui/icons/Add';
import fetchEvents from './../../helpers/APICalls/fetchEvents';
import { Alert } from '@material-ui/lab';

interface Props {
  loggedInUser: User;
  handleDrawerToggle?: () => void;
}

const Meetings = ({ loggedInUser }: Props): JSX.Element => {
  const classes = useStyles();
  const [events, setEvents] = useState([]);
  const [error, setError] = useState(false);
  const [spacing] = React.useState<GridSpacing>(2);

  useEffect(() => {
    fetchEvents().then((data) => {
      if (data.error) {
        setError(true);
        setTimeout(() => {
          setError(false);
        }, 2000);
      } else if (data.success) {
        setEvents(data.success);
      }
    });
    // eslint-disable-next-line
  }, []);

  const copyToClipBoard = (url: string) => {
    navigator.clipboard.writeText(url);
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Divider />
        <AvatarDisplay loggedIn user={loggedInUser} />
        <Typography variant="h5">{loggedInUser.username}</Typography>
        <Typography variant="h5">{loggedInUser.email}</Typography>
        <Button variant="outlined" color="primary" href="#outlined-buttons" className={classes.right}>
          <Typography variant="h6">
            <AddIcon />
            New Event
          </Typography>
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Grid container direction="row" alignItems="center" justify="center" spacing={spacing}>
          {events?.map((eachEvent: any, index: any) => (
            <Grid key={index} item xs={3}>
              <Paper className={classes.paper}>
                <Box m={2}>
                  <Box display="flex" justifyContent="flex-end">
                    <SettingsIcon />
                  </Box>
                  <Typography variant="h5">{eachEvent.name}</Typography>
                </Box>
                <Divider />
                <Box m={2} display="flex" justifyContent="space-between">
                  <Box display="flex">
                    <ScheduleIcon />
                    <Typography variant="h5">{eachEvent.duration}</Typography>
                  </Box>
                  <Button
                    variant="outlined"
                    color="primary"
                    href="#outlined-buttons"
                    onClick={() => copyToClipBoard(eachEvent.url)}
                  >
                    Copy Link
                  </Button>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
        <Button variant="outlined" color="primary" href="#outlined-buttons" className={classes.right}>
          Getting Started!
        </Button>
        {error && <Alert severity="error">Error occured while recieving events</Alert>}
      </Grid>
    </Grid>
  );
};

export default Meetings;
