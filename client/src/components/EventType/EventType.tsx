import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import useStyles from './useStyles';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import { Container, Box, Button, Typography, Grid, Divider } from '@material-ui/core';

// Context
import { useAuth } from '../../context/useAuthContext';

const EventType = (): JSX.Element => {
  const classes = useStyles();
  const history = useHistory();
  const { loggedInUser } = useAuth();

  return (
    <Box pb={10} style={{ background: 'ghostwhite', height: '100%' }}>
      <Container>
        <Box pt={5} display="flex" flexDirection="row">
          <img src={loggedInUser?.picture} alt="profile picture" className={classes.logo} />
          <Box display="flex" flexDirection="column">
            <Typography className={classes.name}>{loggedInUser?.username}</Typography>
            <Typography className={classes.link}>calendapp.com/{loggedInUser?.username}</Typography>
          </Box>
          <Button className={classes.button}>+ New event type</Button>
        </Box>
        <Grid container style={{ marginTop: '5rem' }}>
          <Grid item md={4}>
            <Box className={classes.eventBox} style={{ borderTop: '8px solid darkviolet' }}>
              <Container>
                <Box mb={4} ml={3} display="flex" flexDirection="column">
                  <SettingsOutlinedIcon style={{ marginLeft: 'auto', marginTop: '1rem', fontSize: '1.5rem' }} />
                  <Box className={classes.hover} onClick={() => history.push(`/${loggedInUser?.username}/15min`)}>
                    <Typography className={classes.meetingLength}>15 Minute Meeting</Typography>
                    <Typography className={classes.meetingType}>One-on-one</Typography>
                  </Box>
                </Box>
                <Divider />
                <Box mt={3} pb={2} display="flex" flexDirection="row" alignItems="center">
                  <AccessTimeIcon />
                  <Typography className={classes.time}>15 min</Typography>
                  <Button className={classes.button} onClick={() => console.log('Good bye')}>
                    Copy Link
                  </Button>
                </Box>
              </Container>
            </Box>
          </Grid>
        </Grid>
        <Box mt={10} display="flex" flexDirection="row-reverse">
          <Button className={classes.guideButton}>Getting Started Guide</Button>
        </Box>
      </Container>
    </Box>
  );
};

export default EventType;
