const colors = require("colors");
const path = require("path");
const http = require("http");

const express = require("express");
const { notFound, errorHandler } = require("./middleware/error");
const connectDB = require("./boot/db");
const { join } = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const session = require("express-session");

//SendGrid Email
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
// Passport
const passport = require("passport");
require("./boot/passportConfig");

// Routes
const authRouter = require("./routes/auth");
const profileRouter = require("./routes/profile");
const userRouter = require("./routes/user");
const meetingRouter = require("./routes/meeting");
const appointmentRouter = require("./routes/appointment");
const onboardingRouter = require("./routes/onboarding");
const availableRouter = require("./routes/availability");
const subscriptionRouter = require("./routes/subscription");
const calendarRouter = require("./routes/calendar");

const { json, urlencoded } = express;

connectDB();
const app = express();
const server = http.createServer(app);

if (process.env.NODE_ENV === "development") {
  app.use(logger("dev"));
}

// Middleware
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(join(__dirname, "public")));

// Sessions
app.use(
  session({
    secret: `${process.env.EXPRESS_SESSION_SECRET}`,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24,
    },
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

app.use("/auth", authRouter);
app.use("/profile", profileRouter);
app.use("/users", userRouter);
app.use("/meeting", meetingRouter);
app.use("/appointment", appointmentRouter);
app.use("/availability", availableRouter);
app.use("/onboarding", onboardingRouter);
app.use("/subscription", subscriptionRouter);

app.post("/webhook", async (req, res) => {
  // Retrieve the event by verifying the signature using the raw body and secret.
  let event;

  try {
    event = stripe.webhooks.constructEvent(
      req.body,
      req.headers["stripe-signature"],
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    console.log(err);
    console.log(`⚠️  Webhook signature verification failed.`);
    console.log(`⚠️  Check the env file and enter the correct webhook secret.`);
    return res.sendStatus(400);
  }
  // Extract the object from the event.
  const dataObject = event.data.object;

  // Handle the event
  // Review important events for Billing webhooks
  // https://stripe.com/docs/billing/webhooks
  // Remove comment to see the various objects sent for this sample
  switch (event.type) {
    case "invoice.payment_succeeded":
      console.log("payment is succeded");
      if (dataObject["billing_reason"] == "subscription_create") {
        const subscription_id = dataObject["subscription"];
        const payment_intent_id = dataObject["payment_intent"];

        // Retrieve the payment intent used to pay the subscription
        const payment_intent = await stripe.paymentIntents.retrieve(payment_intent_id);

        const subscription = await stripe.subscriptions.update(subscription_id, {
          default_payment_method: payment_intent.payment_method,
        });
      }
    case "invoice.paid":
      // Used to provision services after the trial has ended.
      // The status of the invoice will show up as paid. Store the status in your
      // database to reference when a user accesses your service to avoid hitting rate limits.
      break;
    case "invoice.payment_failed":
      // If the payment fails or the customer does not have a valid payment method,
      //  an invoice.payment_failed event is sent, the subscription becomes past_due.
      // Use this webhook to notify your user that their payment has
      // failed and to retrieve new card details.
      break;
    case "customer.subscription.deleted":
      console.log("customer.subscription.deleted");
      if (event.request != null) {
        // handle a subscription cancelled by your request
        // from above.
      } else {
        // handle subscription cancelled automatically based
        // upon your subscription settings.
      }
      break;
    default:
    // Unexpected event type
  }
  res.sendStatus(200);
});
app.use("/calendar", calendarRouter);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/client/build")));

  app.get("*", (req, res) => res.sendFile(path.resolve(__dirname), "client", "build", "index.html"));
} else {
  app.get("/", (req, res) => {
    res.send("API is running");
  });
}

app.use(notFound);
app.use(errorHandler);

// Handle unhandled promise rejections
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`.red);
  // Close server & exit process
  server.close(() => process.exit(1));
});

module.exports = { app, server };
