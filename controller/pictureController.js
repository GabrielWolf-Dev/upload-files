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

const getPictures = async (req, res) => {
  try {
    const { id } = req.params;
    const picture = await Picture.get(id);

    res.status(200).json({
      message: "Request for a picture succeded",
      status: 200,
      result: picture,
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

const insertPicture = async (req, res) => {
  try {
    const { name } = req.body;
    const file = req.file;

    const { insertId } = await Picture.insert({
      name,
      src: file.path,
    });

    const picture = await Picture.get(insertId);

    res.json({
      picture,
      message: "Image saved successfully!",
    });
  } catch (error) {
    res.status(500).json({ message: "error saving image" });
  }
};

module.exports = {
  getPictures,
  getAllPictures,
  insertPicture,
};
