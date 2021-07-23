import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import useStyles from './useStyles';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import { Container, Box, Button, Typography, Grid, Divider } from '@material-ui/core';
import Meeting from '../../components/Meeting/Meeting';

// Context
import { useAuth } from '../../context/useAuthContext';

const EventType = (): JSX.Element => {
  const classes = useStyles();
  const history = useHistory();
  const { loggedInUser } = useAuth();

  return (
    <Box pb={10} style={{ background: 'ghostwhite', height: '100%' }}>
      <Container>
        <Grid container>
          <Grid item xs={12}>
            <Container>
              <Meeting />
            </Container>
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
