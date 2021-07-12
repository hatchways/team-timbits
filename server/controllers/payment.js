const User = require("../models/User");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const asyncHandler = require("express-async-handler");

exports.createSubcription = asyncHandler(async (req, res, next) => {
  const customer = await stripe.customers.create({
    email: "timbits.rosen@example.com",
  });

  const customerId = customer.id;
  //const priceId = req.body.priceId;
  const priceId = "price_1JCV1sDei66orvOlUJw2aydW";

  try {
    // Create the subscription. Note we're expanding the Subscription's
    // latest invoice and that invoice's payment_intent
    // so we can pass it to the front end to confirm the payment
    const subscription = await stripe.subscriptions.create({
      customer: customerId,
      items: [
        {
          price: priceId,
        },
      ],
      payment_behavior: "default_incomplete",
      expand: ["latest_invoice.payment_intent"],
    });

    res.send({
      subscriptionId: subscription.id,
      clientSecret: subscription.latest_invoice.payment_intent.client_secret,
    });
  } catch (error) {
    return res.status(400).send({ error: { message: error.message } });
  }
});
