import React, { useState, useEffect } from 'react';
import useStyles from './useStyles';
import { Box, Grid, Paper, Typography, Button, Container, TextField, CircularProgress } from '@material-ui/core';
import { useSnackBar } from '../../../context/useSnackbarContext';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const Checkout = ({ price, priceId }) => {
  const stripe = useStripe();
  const elements = useElements();
  const classes = useStyles();
  const { updateSnackBarMessage } = useSnackBar();
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [processing, setProcessing] = useState(false);
  const [billingDetails, setBillingDetails] = useState({
    name: '',
    email: '',
  });

  if (error) {
    updateSnackBarMessage(`Payment failed ${error.message}`);
  }

  const handleInput = (event) => {
    setBillingDetails({ ...billingDetails, [event.target.name]: event.target.value });
  };

  const handleChange = async (event) => {
    // Listen for changes in the CardElement
    // and display any errors as the customer types their card details
    setDisabled(event.empty);
    setError(event.error ? event.error.message : '');
  };

  const handleSubmit = async (event) => {
    // Block native form submission.
    let clientSecret;

    event.preventDefault();
    setProcessing(true);
    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const cardElement = elements.getElement(CardElement);

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }
    //create customer or subscription or both
    await fetch('/subscription/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        priceId: priceId,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        clientSecret = data.clientSecret;
      });

    // Create payment method and confirm payment intent.
    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: cardElement,
        billing_details: billingDetails,
      },
    });
    setProcessing(false);

    if (payload.error) {
      setError(`Payment failed ${payload.error.message}`);
    } else {
      setError(null);
      setSucceeded(true);
      updateSnackBarMessage('Payment is successfull');
    }
  };

  return (
    <Container className={classes.root}>
      <form onSubmit={handleSubmit} className={classes.form}>
        <Grid container item spacing={4} xs={12} md={6} component={Paper} elevation={6}>
          <Grid item xs={12}>
            <Box alignSelf="center">
              <Typography variant="h5" style={{ fontWeight: 700 }}>
                Checkout
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              InputLabelProps={{ shrink: true }}
              label={<Typography>Name on Card</Typography>}
              name="name"
              value={billingDetails.name}
              onChange={handleInput}
            />
            <TextField
              fullWidth
              InputLabelProps={{ shrink: true }}
              label={<Typography>Email</Typography>}
              name="email"
              value={billingDetails.email}
              onChange={handleInput}
            />
          </Grid>
          <Grid item xs={12}>
            <CardElement
              options={{
                iconStyle: 'solid',
                style: {
                  base: {
                    color: 'black',
                    fontWeight: 500,
                    fontSize: '16px',
                  },
                },
              }}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Grid container justifyContent="space-between">
              <Grid item>
                <Typography variant="h5">Total Price: {price}$/month</Typography>
              </Grid>
              <Grid item>
                {processing ? (
                  <CircularProgress />
                ) : (
                  <Button
                    type="submit"
                    color="primary"
                    variant="outlined"
                    disabled={processing || disabled || succeeded}
                  >
                    Pay now
                  </Button>
                )}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};
export default Checkout;
