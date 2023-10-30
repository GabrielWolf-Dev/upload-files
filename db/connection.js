const mysql = require("mysql2/promise");

let connection;

try {
  connection = mysql.createPool({
    connectionLimit: 10,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  });
  console.log("-- DATABASE IS CONNECT! --");
} catch ({ message }) {
  console.error(`ERROR MESSAGE: `, message);
}

module.exports = connection;
