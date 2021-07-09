const express = require("express");
const router = express.Router();
const { passportProtect } = require("../middleware/auth");
const { 
  loadUser, 
  logoutUser, 
  checkUserEmail,
  googleAuth,
  googleRedirect 
} = require("../controllers/auth");

router.route("/user").get(passportProtect, loadUser);

router.route("/logout").get(logoutUser);

router.route("/email/:email").post(checkUserEmail);

router.route('/google').get(googleAuth);

router.route('/google/redirect').get(googleRedirect);

module.exports = router;
