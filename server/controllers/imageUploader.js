const cloudinary = require("../utils/cloudinary");
const User = require("../models/User");
const asyncHandler =  require('express-async-handler');

exports.loadImageToCloudinary = asyncHandler(async (req, res, next) => {

    try {
    // Upload image to cloudinary
    const result = await cloudinary.uploader.upload(req.file.path);
    let user = new User({
        picture: result.secure_url,
        cloudinary_id: result.public_id,
    });
    // Save
    await user.save();
    return res.json(user)
    } catch (error) {
      if (error) {
        res.status(400).json(error);
      } else {
        res.status(200).json({ result});
      }
      
    }
});


exports.uploads = (file, folder) => {
    return new Promise(resolve => {
        cloudinary.uploader.upload(file, (result) => {
            resolve({
                url: result.url,
                id: result.public_id
            })
        }, {
            resource_type: "auto",
            folder: folder
        })
    })
}