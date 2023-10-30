const connection = require("../../db/connection");

module.exports = async (picture) => {
  const { name, src } = picture;
  const query = "INSERT INTO picture (name, src) VALUES (?, ?);";
  const [pictureResult] = await connection.execute(query, [name, src]);

  return pictureResult;
};
