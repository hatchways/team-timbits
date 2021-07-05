const User = require("../models/User");
const asyncHandler = require("express-async-handler");
const generateToken = require("../utils/generateToken");

// @route POST /auth/register
// @desc Register user
// @access Public
exports.registerUser = asyncHandler(async (req, res, next) => {
  const { username, email, password } = req.body;

  const emailExists = await User.findOne({ email });

  if (emailExists) {
    res.status(400);
    throw new Error("A user with that email already exists");
  }

  const usernameExists = await User.findOne({ username });

  if (usernameExists) {
    res.status(400);
    throw new Error("A user with that username already exists");
  }

  const user = await User.create({
    username,
    email,
    password
  });

  if (user) {
    const token = generateToken(user._id);
    const secondsInWeek = 604800;

    res.cookie("token", token, {
      httpOnly: true,
      maxAge: secondsInWeek * 1000
    });

    res.status(201).json({
      success: {
        user: {
          id: user._id,
          username: user.username,
          email: user.email
        }
      }
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// @route POST /auth/login
// @desc Login user
// @access Public
exports.loginUser = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    const token = generateToken(user._id);
    const secondsInWeek = 604800;

    res.cookie("token", token, {
      httpOnly: true,
      maxAge: secondsInWeek * 1000
    });

    res.status(200).json({
      success: {
        user: {
          id: user._id,
          username: user.username,
          email: user.email
        }
      }
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

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
  res.clearCookie("token");
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
