const express = require('express')
const path  = require('path')
const app = express()

app.set('views', path.join(__dirname , 'views'))
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, "public")))

PORT = 3000
app.get('/', (req, res)=>{
    console.log("usernames will be logged here - wip")
})

app.get("/new", (req, res)=>{
    res.render('addUser.ejs')

}
)

app.post('/new', (req, res)=>{
    console.log("username to be saved: ", req.body.username)
})

app.listen(PORT, ()=>{
    console.log("The port is running")
})