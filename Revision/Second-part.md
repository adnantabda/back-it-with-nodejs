Routes 
The anatomy of a route 

```js
app.get("/" , (req, res)=> res.send("what's up"))
app.post("/messages" , (req, res)=> res.send("what's up"))

```
a path can be a string or regular expression 
we can also using a certain symbols with string path like ? + * () to provide some pattern 
note : order matters when defining routes 
for example if we define the route "*" first all route after it can't not reached 
```js
app.get("*", (req, res) => {
  res.send("* is a great way to catch all otherwise unmatched paths, e.g. for custom 404 error handling.");
});
app.get("/messages", (req, res) => {
  res.send("This route will not be reached because the previous route's path matches first.");
});


```

route parameters 

```js
/**
 * GET /odin/messages will have this log
 * { username: 'odin' }
 *
 * GET /theodinproject79687378/messages would instead log
 * { username: 'theodinproject79687378' }
 */
app.get("/:username/messages", (req, res) => {
  console.log(req.params);
  res.end();
});

/**
 * GET /odin/messages/79687378 will have this log
 * { username: "odin", messageId: "79687378" }
 */
app.get("/:username/messages/:messageId", (req, res) => {
  console.log(req.params);
  res.end();
});


```

Query parameters 

Query parameters are a unique and optional part of a URL that appear at the end. A ? denotes the start of the query parameters, with each query being a key-value pair with the format key=value, and each query separated by an &.

```js
/**
 * GET /odin/messages?sort=date&direction=ascending will log
 * Params: { username: "odin" }
 * Query: { sort: "date", direction: "ascending" }
 *
 * GET /odin/messages?sort=date&sort=likes&direction=ascending will log
 * Params: { username: "odin" }
 * Query: { sort: ["date", "likes"], direction: "ascending" }
 */
app.get("/:username/messages", (req, res) => {
  console.log("Params:", req.params);
  console.log("Query:", req.query);
  res.end();
});


```


Routers 

routers used to group similar path together 

```js
// routes/authorsRouter.js
const { Router } = require("express");

const authorsRouter = Router();

authorsRouter.get("/", (req, res) => res.send("All authors"));
authorsRouter.get("/:authorId", (req, res) => {
  const { authorId } = req.params;
  res.send(`Author ID: ${authorId}`);
});

module.exports = authorsRouter;
```

```js

// app.js
const express = require("express");
const app = express();
const booksRouter = require("routes/booksRouter");
const authorsRouter = require("routes/authorsRouter");
const indexRouter = require("routes/indexRouter");

app.use("/books", booksRouter);
app.use("/authors", authorsRouter);
app.use("/", indexRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}!`);
});
```