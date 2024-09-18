const express = require('express')
const app = express()
const path = require('path')
// const file = require('fs')

app.set('views', path.join(__dirname , 'views'))
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, "public")))

const time = new Date()
app.use((req, res, next)=>{
    console.log(req.method , req.url , time)
    next()
})

const links = [
    { href: "/", text: "Home" },
    { href: "about", text: "About" },
  ];
app.get("/", (req, res)=>{
    res.render("index", {message: 'Message From the server', links: links})
})

app.get("/about", (req, res)=>{
    res.render('about', {link: '/'})
})

// app.get("/test", (req, res)=>{

//     file.readFile('test.html', 'utf-8', (error, data)=>{
//         res.send(data)
//     })
    
// })



PORT = 3000

app.listen(PORT, ()=>{
    console.log(`The server stated running on ${PORT} port`)
})