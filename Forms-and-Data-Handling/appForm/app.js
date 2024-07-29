const express = require("express");
const app = express();
const usersRouter = require("./routes/usersRouter");
const usersStorage = require("./storages/usersStorage");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use("/users", usersRouter);
app.get("/", (req, res) => {
  res.render("index", {
    title: "User List",
    users: usersStorage.getUsers(),
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Express app is running on port ${PORT}!`));

// Most simple for will use the `Content-Type: application/x-www-form-urlencoded`

// unfortunately express can't parse that data that is why we use urlencoded

// express.urlencoded({}) is a middleware to handle this for us and it automatically set forms data to the req.body field.
