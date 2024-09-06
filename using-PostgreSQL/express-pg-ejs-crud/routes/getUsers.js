const { Pool  } = require('pg')

const pool = new Pool({
    user: 'adnan',
    host: 'localhost',
    database: 'userdb',
    password: 'adnaan388102',
    port: 5432
})

async function getAllUsers(req, res){

    try {
        const result = await pool.query('SELECT * FROM users;')
        res.render('index', {users: result.rows})
    
    }catch(err){
        console.log(err)
        res.send("Error retrieving users")
    }
}

async function addUser(req, res){
    const { username } = req.body;
    try{
        await pool.query('INSERT INTO users (username) VALUES ($1)', [username])
        res.redirect('/')
    }catch(err){
        console.log(err)
        res.send('Error encountered while adding user')
        }
}

async function updateUser(req, res){
    const { id } = req.params;
    const { username } = req.body;
    try {
        await pool.query('UPDATE users SET username = $1 WHERE id= $2', [username, id])
        res.redirect('/')
    }catch(err){
        console.log(err)
        res.send("error updating user")
    }
}

async function deleteUser(req, res){
    const { id } = req.params;
    try{
        await pool.query('DELETE FROM users WHERE id = $1', [id]);
        res.redirect('/');
    }catch(err){
        console.log(err)
        res.send('error deleting user')
    }
}

module.exports = {
    getAllUsers,
    addUser,
    updateUser,
    deleteUser
}