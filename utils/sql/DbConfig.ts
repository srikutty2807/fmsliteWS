import * as sql from "mssql";
require("dotenv").config();

 export const config: sql.config = {
  user: process.env.DB_USER,
  server: process.env.DB_SERVER || "localhost",
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: 1433,
  options: {
    encrypt: false,
  },
};

module.exports = config