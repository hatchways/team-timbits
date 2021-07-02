const User = require("../models/User");
const asyncHandler = require("express-async-handler");


// @route POST /users
// @desc Search for users
// @access Private
exports.searchUsers = asyncHandler(async (req, res, next) => {
  const searchString = req.query.search;

  let users;
  if (searchString) {
    users = await User.find({
      username: { $regex: searchString, $options: "i" }
    });
  }

  if (!users) {
    res.status(404);
    throw new Error("No users found in search");
  }

  res.status(200).json({ users: users });
});



// @route GET /:username
// @desc Search for username
// @access Private
exports.getUserByUsername = asyncHandler(async (req, res, next) => {

  const usernameExists = await User.findOne({ username: req.params.username });

  if(!usernameExists) {
    res.status(400).json({ msg: 'Username not found' });
  }

  return res.status(200).json({ usernameExists });
});


// @route POST /:id
// @desc Update user
// @access Private
exports.updateUser = asyncHandler(async (req, res, next) => {
  const user = await User.findOne({ user: req.params.user });

  if(!user) {
    return res.status(400).json({ msg: 'User not found' });
  }

  user.username = req.body.username;
  user.email = req.body.email;

  await user.save();

  res.status(200).json({ user });
});
