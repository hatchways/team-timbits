const express = require("express");
const router = express.Router();
const { passportProtect } = require("../middleware/auth");
const { searchUsers, getUserByUsername, updateUser } = require("../controllers/user");
const { route } = require("./auth");
const { upload } = require("../utils/multer");
const { loadImageToCloudinariy } = require("../controllers/image-uploader");

router.route("/").get(passportProtect, searchUsers);
router.route("/:username").get(getUserByUsername);
router.route("/:id").post(updateUser);

//Cloudinary
router.route("/", upload.single("profile-image")).post(loadImageToCloudinariy);

module.exports = router;
