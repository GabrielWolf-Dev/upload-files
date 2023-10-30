const connection = require("../../db/connection");

module.exports = async (id) => {
  const query = "SELECT * FROM picture WHERE id = ?;";
  const [picture] = await connection.execute(query, [id]);

  return picture[0];
};
