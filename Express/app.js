const e = require("express");
const express = require("express");
const app = express();
const file = require('fs')

app.get("/", (req, res) => {
    console.log(req.secure)
    file.readFile("index.html", 'utf-8', (err, data)=>{
        if (err){
            console.log(err)
        }


        res.send(data);
    })


});


app.get("/adnan", (req, res) => {
    file.readFile("index.html", 'utf-8', (err, data)=>{
        if (err){
            console.log(err)
        }
        console.log(req.fresh)
        res.download('20240628_232226.jpg', 'image.jpg',)
        res.send("downloaded")
    })
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));


// GET --> request --> function middleware --> express respond
// status Code with dat <-- respond <-- express respond


// ///////////////////////////////////////////////////

var greet = express.Router()

greet.get('/jp', function (req, res) {
  console.log(req.baseUrl) // /greet
  console.log(req.cookies)
  res.send('Konnichiwa!')
})

app.use('/greet', greet) // load the router on '/greet'

// ///////////////////////////////////////////////////////

app.get('/profile', function (req, res, next) {
    console.log(req.body)
    res.json(req.body)
  })


  
const name = express.Router()


name.get('/:username' , (req, res)=>{
    console.log(res.headersSent)
    // console.log(req.baseUrl)
    // console.log(req.method)
    // console.log(req.params.username)
    // res.status(200)
    res.send(`<h2>Welcome ${req.params.username} </h2>`)
    console.log(res.headersSent)
})

app.use('/username' , name)
