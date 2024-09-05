const express = require('express')
const bodyParser = require('body-parser')
const ob = require('./routes/getUsers')


const app = express()

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true}))
app.get('/', ob.getAllUsers)
app.post('/add', ob.addUser)
app.post('/update/:id', ob.updateUser)
app.post('/delete/:id', ob.deleteUser)

app.listen(3000, ()=> {
    console.log("the server is running.....")
})