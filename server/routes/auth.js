const express = require("express");
const router = express.Router();
const { validateRegister, validateLogin } = require("../validate");
const passport = require("passport");
const { protect, passportProtect } = require("../middleware/auth");
const { registerUser, loginUser, loadUser, logoutUser, checkUserEmail } = require("../controllers/auth");

router.route("/register").post(validateRegister, registerUser);

router.route("/login").post(validateLogin, loginUser);

router.route("/user").get(passportProtect, loadUser);

router.route("/logout").get(logoutUser);

router.route("/email/:email").post(checkUserEmail);

router
  .route("/google")
  .get(passport.authenticate("google", { scope: ["profile", "email", "https://www.googleapis.com/auth/calendar"] }));

router.route("/google/callback").get(passport.authenticate("google", { failureRedirect: "/failure" }), (req, res) => {
  res.redirect("http://localhost:3000/dashboard");
});

module.exports = router;
