import React, { useState, useEffect } from 'react';
//import { makeStyles } from '@material-ui/core/styles';
import useStyles from '../EventType/useStyles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Typography } from '@material-ui/core';
//import Grid from '@material-ui/core/Grid';
//import AvatarDisplay from '../AvatarDisplay/AvatarDisplay';
import { User } from '../../interface/User';
import Box from '@material-ui/core/Box';
import Meeting from '../../components/Meeting/Meeting';

import axios from 'axios';

interface Props {
  loggedInUser: User;
  handleDrawerToggle?: () => void;
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: unknown;
  value: unknown;
}

const EventType = ({ loggedInUser }: Props): JSX.Element => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [appointments, setAppointments] = useState(undefined);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  function a11yProps(index: unknown) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  useEffect(() => {
    axios
      .get(`/appointment/${loggedInUser.id}`, { withCredentials: true })
      .then((res) => setAppointments(res.data.msg));
  }, [loggedInUser.id]);

  return (
    <Paper className={classes.root}>
      <Typography className={classes.title} variant="h6">
        MyCalendarApp
      </Typography>
      <Tabs
        value={value}
        className={classes.left}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Meetings" {...a11yProps(0)} />
        <Tab label="Schelduled Meetings" {...a11yProps(1)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Meeting loggedInUser={loggedInUser} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <h1>{appointments}</h1>
      </TabPanel>
    </Paper>
  );
};

export default EventType;
