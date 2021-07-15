const express = require("express");
const router = express.Router();
const { passportProtect } = require("../middleware/auth");
const { searchUsers, getUserByUsername, updateUser } = require("../controllers/user");
const { route } = require("./auth");

router.route("/").get(passportProtect, searchUsers);
router.route("/:username").get(getUserByUsername);
router.route("/:id").post(updateUser);


module.exports = router;
