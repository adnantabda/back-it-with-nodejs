const { Pool } = require('pg');
const express = require('express');
const session = require('express-session');
const path = require("path")

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy

const pool = new Pool({
    host: 'localhost',
    port: 5432,
    password: 'Adnaan388102',
    database: 'bloggity',
    user: 'adnan'
})

const app = express();
app.set("views", path.join(__dirname, "templates"));
app.set("view engine", "ejs");
app.use(express.static('public'));

app.use(session({secret: "memes", resave: false, saveUninitialized: false}));

app.use(passport.session());
app.use(express.urlencoded({extended: false}));



// Routes


app.get("/signup-form", (req, res)=>{
    res.render('signup-form')
})

app.post("/sign-up", async(req, res, nex)=>{
    try{
        await pool.query("INSERT INTO users (username, password) VALUES ($1, $2)", [req.body.username, req.body.password])
        res.redirect("/")
    }
    catch(err){
        return next(err)
    }
})



app.get("/", (req, res)=> res.render("index"))





app.listen(3000, () => console.log("the app is running on the port 000"))

