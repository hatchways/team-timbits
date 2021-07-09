const User = require('../models/User');
const asyncHandler = require('express-async-handler');

// @route GET /auth/url
// @des check for user url
// @access Private
exports.checkUserUrl = asyncHandler(async (req, res, next) => {
    const user = await User.findOne({ url: req.params.url });

    if (!user) {
        res.status(400).json({
            error: {
                msg: "Url not valid"
            },
        });
    }
    return res.status(200).json({ msg: 'Url checks out.' });
});