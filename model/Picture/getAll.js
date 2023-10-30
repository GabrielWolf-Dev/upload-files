const connection = require("../../db/connection");

module.exports = async () => {
  const query = "SELECT * FROM picture;";
  const [pictures] = await connection.execute(query);

  return pictures;
};
