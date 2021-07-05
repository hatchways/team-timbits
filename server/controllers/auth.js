const User = require("../models/User");
const asyncHandler = require("express-async-handler");

// @route GET /auth/user
// @desc Get user data with valid token
// @access Private
exports.loadUser = asyncHandler(async (req, res, next) => {
  const user = await User.findOne({ googleId: req.user.googleId });
  if (!user) {
    res.status(401);
    throw new Error("Not authorized");
  }
  res.status(200).json({
    success: {
      user: {
        id: user._id, //user mongoDB document id
        email: user.gmail,
      },
    },
  });
});

// @route GET /auth/logout
// @desc Logout user
// @access Public
exports.logoutUser = asyncHandler(async (req, res, next) => {
  //pasport.js method to clear passport object
  req.logout();
  //express-session method to clear session variables.
  req.session.destroy();
  res.send("You have successfully logged out");
});

// @route GET /auth/email/:email
// @desc check if email exist in database
// @access Public
exports.checkUserEmail = asyncHandler(async (req, res, next) => {
  const user = await User.findOne({ gmail: req.params.email });

  if (!user) {
    res.status(200).json({
      error: {
        msg: "Email not found",
      },
    });
  }
  return res.status(200).json({ success: { email: user.email } });
});
