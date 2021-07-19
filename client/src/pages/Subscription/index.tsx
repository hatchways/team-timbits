import { useState } from 'react';
import { Route, Switch, useRouteMatch, Link } from 'react-router-dom';
import { Box, Grid, Paper, Typography, Button, Divider } from '@material-ui/core';
import useStyles from './useStyles';
import Checkout from './Checkout';
import DoneIcon from '@material-ui/icons/Done';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_A7jK4iCYHL045qgjjfzAfPxu');

const Subscription = (): JSX.Element => {
  const classes = useStyles();
  const { path, url } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={path}>
        <Box className={classes.root}>
          <Box className={classes.titleContainer}>
            <Typography gutterBottom variant="h4" style={{ fontWeight: 700 }}>
              Upgrade your Account
            </Typography>
            <Typography variant="subtitle1">You are on the free basic plan</Typography>
          </Box>
          <Box>
            <Grid container spacing={4} justifyContent="center" className={classes.planCardContainer}>
              <Grid item xs={12} md={3}>
                <Paper className={classes.planCard} elevation={6}>
                  <Box className={classes.planContent}>
                    <Box>
                      <Typography style={{ color: '#7F0BFF' }} variant="h3">
                        Premium
                      </Typography>
                      <Typography variant="subtitle1" style={{ fontWeight: 700 }}>
                        $8/month
                      </Typography>
                    </Box>
                    <Box>
                      <Button variant="contained" color="primary" size="large" className={classes.upgradeButton}>
                        <Link to={`${url}/checkout`} style={{ textDecoration: 'none', color: 'white' }}>
                          Upgrade
                        </Link>
                      </Button>
                    </Box>
                  </Box>
                  <Divider />
                  <Box className={classes.planDetails}>
                    <Box display="flex">
                      <DoneIcon htmlColor="#F76C00" />
                      <Typography variant="subtitle1"> Unlimited Event Types</Typography>
                    </Box>
                    <Box display="flex">
                      <DoneIcon htmlColor="#F76C00" />
                      <Typography variant="subtitle1">Group Meetings</Typography>
                    </Box>
                  </Box>
                </Paper>
              </Grid>
              <Grid item xs={12} md={3}>
                <Paper className={classes.planCard} elevation={6}>
                  <Box className={classes.planContent}>
                    <Box>
                      <Typography style={{ color: '#89B801' }} variant="h3">
                        Professional
                      </Typography>
                      <Typography variant="subtitle1" style={{ fontWeight: 700 }}>
                        $12/month
                      </Typography>
                    </Box>
                    <Box>
                      <Button variant="contained" color="primary" size="large" className={classes.upgradeButton}>
                        <Link to={`${url}/checkout`} style={{ textDecoration: 'none', color: 'white' }}>
                          Upgrade
                        </Link>
                      </Button>
                    </Box>
                  </Box>
                  <Divider />
                  <Box className={classes.planDetails}>
                    <Box display="flex">
                      <DoneIcon htmlColor="#F76C00" />
                      <Typography variant="subtitle1"> Unlimited Event Types</Typography>
                    </Box>
                    <Box display="flex">
                      <DoneIcon htmlColor="#F76C00" />
                      <Typography variant="subtitle1">Group Meetings</Typography>
                    </Box>
                    <Box display="flex">
                      <DoneIcon htmlColor="#F76C00" />
                      <Typography variant="subtitle1">6 Calendar Collections</Typography>
                    </Box>
                  </Box>
                </Paper>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Route>
      <Route exact path={`${path}/checkout`}>
        <Elements stripe={stripePromise}>
          <Checkout />
        </Elements>
      </Route>
    </Switch>
  );
};

export default Subscription;
