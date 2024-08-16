const {Pool} = require("pg");
const { database } = require("pg/lib/defaults");


module.exports = new Pool ({
    host: "localhost",
    user: "<role_name>",
    database:"top_users",
    port: 5432
})