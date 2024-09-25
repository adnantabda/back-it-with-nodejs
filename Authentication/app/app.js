const { Pool } = require("pg")
const express = require("express")
const session = require("express-session")
const passport = require("passport")
const LocalStrategy = require("passport-local").Strategy
const bcrypt = require("bcrypt");


const pool = new Pool({
    user: 'adnan', 
    host: 'localhost',
    database: 'odin_media',
    password: "Adnaan388102",
    port: 5432
})

const app = express();
app.set("views", __dirname)
app.set("view engine", "ejs")

app.use(session({secret: "cats",resave: false, saveUninitialized: false }));
app.use(passport.session());

app.use(express.urlencoded({ extended:false}))

app.get("/sign-up", (req, res) => res.render("sign-up-form"));
app.get("/", (req, res)=> res.render("index"))


bcrypt.hash(req.body.password, 10, async (err, hashedPassword) => {
  if (err) {
    // Handle the error (e.g., log it, send a response)
    console.error(err);
    return next(err); // Pass the error to the next middleware (if using Express)
  }
  
  try {
    // Store the hashedPassword in the database
    await pool.query("INSERT INTO users (username, password) VALUES ($1, $2)", [
      req.body.username,
      hashedPassword
    ]);
    res.redirect("/");
  } catch (dbError) {
    return next(dbError); // Handle database-related errors
  }
});

  

// Authentication 

passport.use( 
    new LocalStrategy(async( username, password, done)=>{
        try{
            const { rows } = await pool.query("select * from users where username = $1", [username])
            const user = rows[0]
            
            if (!user){
                return done(null, false, { message: "incorrect username"})
            }
            if (user.password != password){
                return done(null, false, {message : "incorrect password"})
            }
            return done(null, user)

        }catch(err){
            return done(err)
        }
    })
)

passport.serializeUser((user, done)=>{
  done(null, user.id);
})

passport.deserializeUser(async(id, done)=>{
  try{
    const {rows} = await pool.query("select * from users where id = $1" , [id])
    
    const user = rows[0]
    done(null, user)

  }catch(err){
    done(err)
  }
})

app.post("/log-in", passport.authenticate("local", {
  successRedirect: "/sign-up", 
  failureRedirect: "/"
}))

app.get("/", (req, res) => {
  res.render("index", { user: req.user });
});

app.get("/log-out", (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
});


app.use((req, res, next) => {
  res.locals.currentUser = req.user;
  next();
});


app.listen(3000, () => console.log("running the app"))