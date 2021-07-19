const sgMail = require("@sendgrid/mail");
const asyncHandler = require("express-async-handler");

// @route post /email/send
// @desc recieves toEmail email from body
// @access Private
exports.sendEmail = asyncHandler(async (req, res, next) => {
  const { toEmail } = req.body;
  const msg = {
    to: toEmail,
    from: "teamtimbitshatchways@gmail.com", // Use the email address or domain you verified above
    subject: "Sending with Twilio SendGrid is Fun",
    text: "and easy to do anywhere, even with Node.js",
    html: "<strong>and easy to do anywhere, even with Node.js</strong>",
  };
  try {
    const isEmailSent = await sgMail.send(msg);
    if (isEmailSent) {
      res.status(200).json({ success: { msg: "Email Sent" } });
    }
  } catch (error) {
    console.error(error);

    if (error.response) {
      console.error(error.response.body);
    }
    res.status(400).json({ error: { msg: "Email is not sent" } });
  }
});
