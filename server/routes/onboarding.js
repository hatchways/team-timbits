const express = require("express");
const router = express.Router();
const { checkUserUrl } = require('../controllers/onboarding');
const { updateUser } = require('../controllers/user');
const { createUserAvailability } = require('../controllers/onboarding');

router.route("user/:url").get(checkUserUrl);
router.route("user/:url/:timezone").post(updateUser);
router.route("user/availability/:hours/:days").post(createUserAvailability);

module.exports = router;