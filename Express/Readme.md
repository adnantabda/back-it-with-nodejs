# EXPRESS

## Setting up Express

```bash
npm install express
```

**app.js**

```js

const express = require('express');
const app = express();

app.get('/', (req, res) => res.send("<h1>Helloo From ExpressJs</h1>"))

app.get('/adnan/', (req, res) => res.send("<h1>Adnan </h1>"))

const PORT = 3000;
app.listen(PORT, ()=> console.log("Server is running on port 3000"))

```
when our server receives a GET request like in this case **req**, Express stores the request in a request object. This request object gets passed through a chain of functions we call middleware functions until eventually, a middleware function tells express to respond to the request. 

