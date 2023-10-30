const router = require("express").Router();
const picturesController = require("../controller/pictureController");

router.get("/picture/get", picturesController.getAllPictures);
router.post("/picture", picturesController.insertPicture);

module.exports = router;
