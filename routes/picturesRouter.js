const router = require("express").Router();
const picturesController = require("../controller/pictureController");

const upload = require("../config/multer");

router.get("/picture/get/:id", picturesController.getPictures);
router.get("/picture/getAll", picturesController.getAllPictures);
router.post(
  "/picture",
  upload.single("file"),
  picturesController.insertPicture
);

module.exports = router;
