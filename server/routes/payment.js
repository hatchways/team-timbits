const express = require("express");
const router = express.Router();

const { createSubcription } = require("../controllers/payment");

router.route("/subscribe").post(createSubcription);

module.exports = router;
