const pool = require("./pool")


async function getAllUsernames(){
    const { rows } = await pool.query("SELECT * from usernames")
    return rows
}

async function insertUsername(username){
    await pool.query("INSERT INTO usernames (username) Values ($!)", [username])
}

module.exports = {
    getAllUsernames,
    insertUsername
};