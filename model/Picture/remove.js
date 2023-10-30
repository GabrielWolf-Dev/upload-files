const connection = require("../../db/connection");

module.exports = async (id) => {
  const query = "DELETE FROM picture WHERE id = ?;";
  await connection.execute(query, [id]);
};
