import React from 'react';
import { Link } from 'react-router-dom';

// Material-UI and Style
import Typography from '@material-ui/core/Typography';
import { Button, Grid, GridSpacing, Paper } from '@material-ui/core';
import useStyles from '../Meeting/useStyles';
import SettingsIcon from '@material-ui/icons/Settings';
import Divider from '@material-ui/core/Divider';
import ScheduleIcon from '@material-ui/icons/Schedule';
import AddIcon from '@material-ui/icons/Add';
import { Link } from 'react-router-dom';

// Components
import AvatarDisplay from '../AvatarDisplay/AvatarDisplay';

// Interface
import { User } from '../../interface/User';

interface Props {
  loggedInUser: User;
  handleDrawerToggle?: () => void;
}

const Meetings = ({ loggedInUser }: Props): JSX.Element => {
  const classes = useStyles();
  const [spacing] = React.useState<GridSpacing>(2);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Divider />
        <AvatarDisplay loggedIn user={loggedInUser} />
        <Typography variant="h5">{loggedInUser.username}</Typography>
        <Typography variant="h5">{loggedInUser.email}</Typography>
        <Link to="/new-event-type">
          <Button variant="outlined" color="primary" href="#outlined-buttons" className={classes.right}>
            <Typography variant="h6">
              <AddIcon />
              New Event
            </Typography>
          </Button>
        </Link>
      </Grid>
      <Grid item xs={12}>
        <Grid container direction="row" alignItems="center" justify="center" spacing={spacing}>
          {[0, 1, 2].map((value) => (
            <Grid key={value} item xs={3}>
              <Paper className={classes.paper}>
                <Typography variant="h5">15 min Meeting</Typography>
                <SettingsIcon />
                <Divider />
                <ScheduleIcon />
                <Typography variant="h5">15</Typography>
                <Button variant="outlined" color="primary">
                  <Link to={`/${loggedInUser.username}/15min`}>Create Meeting</Link>
                </Button>
              </Paper>
            </Grid>
          ))}
        </Grid>
        <Button variant="outlined" color="primary" href="#outlined-buttons" className={classes.right}>
          Getting Started!
        </Button>
      </Grid>
    </Grid>
  );
};

export default Meetings;
