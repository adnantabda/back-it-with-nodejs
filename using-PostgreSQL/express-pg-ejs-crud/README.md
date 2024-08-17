Creating a simple example site using Express, PostgreSQL, and EJS that allows for CRUD operations

### 1. **Set Up the Project**
   - Create a new directory for your project.
   - Navigate to this directory and initialize a new Node.js project:
     ```bash
     mkdir express-pg-ejs-crud
     cd express-pg-ejs-crud
     npm init -y
     ```
   - Install the required dependencies:
     ```bash
     npm install express ejs pg body-parser
     ```

### 2. **Set Up PostgreSQL**
   - Make sure PostgreSQL is installed and running on your machine.
   - Create a new database for this project:
     ```sql
     CREATE DATABASE userdb;
     ```
   - Create a `users` table in the `userdb` database:
     ```sql
     CREATE TABLE users (
         id SERIAL PRIMARY KEY,
         username VARCHAR(255) NOT NULL
     );
     ```

### 3. **Set Up Express Application**
   - Create an `index.js` file to set up the Express server:
     ```javascript
     const express = require('express');
     const { Pool } = require('pg');
     const bodyParser = require('body-parser');

     const app = express();
     const pool = new Pool({
         user: 'yourusername',
         host: 'localhost',
         database: 'userdb',
         password: 'yourpassword',
         port: 5432,
     });

     app.set('view engine', 'ejs');
     app.use(bodyParser.urlencoded({ extended: true }));

     // Routes will go here

     app.listen(3000, () => {
         console.log('Server is running on http://localhost:3000');
     });
     ```

### 4. **Create CRUD Routes**
   - **Read (Retrieve All Usernames):**
     ```javascript
     app.get('/', async (req, res) => {
         try {
             const result = await pool.query('SELECT * FROM users');
             res.render('index', { users: result.rows });
         } catch (err) {
             console.error(err);
             res.send('Error retrieving users');
         }
     });
     ```
   - **Create (Add a New Username):**
     ```javascript
     app.post('/add', async (req, res) => {
         const { username } = req.body;
         try {
             await pool.query('INSERT INTO users (username) VALUES ($1)', [username]);
             res.redirect('/');
         } catch (err) {
             console.error(err);
             res.send('Error adding user');
         }
     });
     ```
   - **Update (Edit an Existing Username):**
     ```javascript
     app.post('/update/:id', async (req, res) => {
         const { id } = req.params;
         const { username } = req.body;
         try {
             await pool.query('UPDATE users SET username = $1 WHERE id = $2', [username, id]);
             res.redirect('/');
         } catch (err) {
             console.error(err);
             res.send('Error updating user');
         }
     });
     ```
   - **Delete (Remove a Username):**
     ```javascript
     app.post('/delete/:id', async (req, res) => {
         const { id } = req.params;
         try {
             await pool.query('DELETE FROM users WHERE id = $1', [id]);
             res.redirect('/');
         } catch (err) {
             console.error(err);
             res.send('Error deleting user');
         }
     });
     ```

### 5. **Create Views Using EJS**
   - In the root directory, create a `views` folder with an `index.ejs` file to display the usernames and forms for CRUD operations:
     ```html
     <!DOCTYPE html>
     <html lang="en">
     <head>
         <meta charset="UTF-8">
         <meta name="viewport" content="width=device-width, initial-scale=1.0">
         <title>User Management</title>
     </head>
     <body>
         <h1>Usernames</h1>
         <ul>
             <% users.forEach(user => { %>
                 <li>
                     <%= user.username %>
                     <form action="/update/<%= user.id %>" method="POST" style="display:inline;">
                         <input type="text" name="username" value="<%= user.username %>">
                         <button type="submit">Update</button>
                     </form>
                     <form action="/delete/<%= user.id %>" method="POST" style="display:inline;">
                         <button type="submit">Delete</button>
                     </form>
                 </li>
             <% }) %>
         </ul>

         <h2>Add a New User</h2>
         <form action="/add" method="POST">
             <input type="text" name="username" placeholder="Username">
             <button type="submit">Add User</button>
         </form>
     </body>
     </html>
     ```

### 6. **Run the Application**
   - Start the Express server:
     ```bash
     node index.js
     ```
   - Open your browser and go to `http://localhost:3000`. You should be able to add, update, delete, and view usernames.

### 7. **Testing and Error Handling**
   - Ensure you have proper error handling and input validation to prevent SQL injection and other security issues.
   - Consider using tools like `Postman` to test the endpoints.

This setup provides a basic framework for handling CRUD operations with PostgreSQL in an Express app using EJS for templating. You can extend this with more complex features as needed.