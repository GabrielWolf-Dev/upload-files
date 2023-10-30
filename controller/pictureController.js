const Picture = require("../model/Picture");

const getAllPictures = async (req, res) => {
  try {
    const pictures = await Picture.getAll();

    res.status(200).json({
      message: "Request for all pictures succeded",
      status: 200,
      results: pictures,
    });
  } catch (error) {
    console.error("ERROR: ", error);

    res.status(500).json({
      message: "An error ocurred on the server",
      status: 500,
      error: error.message,
    });
  }
};

const insertPicture = async (req, res) => {};

module.exports = {
  getAllPictures,
  insertPicture,
};
