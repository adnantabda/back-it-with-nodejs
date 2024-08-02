const app = require('express')()
const {Router} = require('express')

const authorRouter = Router()

authorRouter.get("/", (req, res) => res.send("All authors"));

authorRouter.get("/:authorId", (req, res) => {
  const { authorId } = req.params;
  res.send(`Author ID: ${authorId}`);
});

app.use('/authors', authorRouter)

app.use('/', (req, res)=>{
    res.send("Home Page")
})

app.listen(5000)

