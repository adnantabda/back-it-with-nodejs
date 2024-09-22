Views 

setting up ejs 

```bash

npm install ejs

```

we define the following application properties 

```js 


app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

```

```js

const path = require("node:path")

```

EJS Syntax 

the <% %> tags allows us to use javascript this lets us write conditional statements, for loops , as well as use variables. 

In order to output a variable as a value, we use the <%= tag.

```js
<% const animals = ["Cat", "Dog", "Lemur", "Hawk"] %>

<ul>
  <% animals.map((animal) => { %>
    <li><%= animal %>s are cute</li>
  <% }) %>
</ul>

```

serving static assets 

```js

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

```