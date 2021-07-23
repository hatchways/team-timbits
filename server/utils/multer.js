const multer = require("multer");
const path = require("path");

//Multer config
const upload = multer({
    storage: multer.diskStorage({
        destination:  function (req, res, cb) {
            cb(null, 'uploads');
        }
    }),
    fileFilter: (req, file, cb) => {
        let ext = path.extname(file.originalname);
        if (ext !== ".jpg" && ext !== ".jpeg" && ext !== ".png") {
            cb(new Error("File type is not supported"), false);
            return;
        }
        cb(null, true);
    },
    limits: { fieldSize: 25 * 1024 * 1024 }
});

module.exports = {
    upload: upload
  }