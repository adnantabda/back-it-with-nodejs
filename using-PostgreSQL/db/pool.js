const { Pool } = require("pg");

// All of the following properties should be read from environment variables
// We're hardcoding them here for simplicity
module.exports = new Pool({
  host: "localhost", // or wherever the db is hosted
  user: "<role_name>",
  database: "top_users",
  password: "<role_password>",
  port: 5432 // The default port
});