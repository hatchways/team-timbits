const express = require("express");
const router = express.Router();
const protect = require("../middleware/auth");
const { searchUsers, getUserByUsername, updateUser } = require("../controllers/user");
const { route } = require("./auth");

router.route("/").get(protect, searchUsers);
router.route("/:username").get(getUserByUsername);
router.route("/:id").post(updateUser);


module.exports = router;
