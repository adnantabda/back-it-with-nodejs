# Controllers 

`MVC - Models Views Controllers`

controllers act as a middleman. but it lets the model does all the heavy task. it knows what to ask the model and what to render to the browser. Generally controllers serve as a way to parties communicate. in this case Views ( what the client sees ) and Model ( the logic behind it ) 

- Controllers are the brains of the operation, that ensures each component is doing its job. 

## Handling Response 

---

**`res.send :`** general purpose for sending data, it automatically sets the Content-Type header based on what data you pass to it. 
if we pass an object it will stringify it as JSON and set the content-type on header to 'application/json'

**`res.json :`** it sets the content to application/json only. it is more explicit 

**`res.redirect :`** it is used to redirect to another url 

**`res.render :`** allows us to render a view template and send the rendered html

---
the above methods ends the `request-response cycle`

**`res.status :`** used to sets the status code manually

`NOTE` Though the above methods end the request-response cycle they
don't end the function execution 

example 

```js
app.get((req, res) => {
  // This works and this ends the request-response cycle
  res.send("Hello from Express");

  // However, it does not exit the function so this will still run
  console.log('This will still run');

  // This will then throw an error that you cannot send again after sending to the client already
  res.send("Bye");
});

```

# Middleware 

middleware is a function that sit between the incoming request and the final intended route handler. 

it typically takes three arguments 

`req :` The request object that represents the incoming http request
`res :` The response object that represent the response set back to the client 
`next :` The function that pass the control to the next middleware function in the chain

Middleware function can perform various tasks 

- Modifying the request or response object
- Executing additional code ( Validation )( Authentication )
- calling the next middleware in the chain 
- Ending The request-response cycle

## Types of middleware 

`Application Level Middle ware`
application level middleware are bound to an instance of express using app.use or using ``app.<Method>`` They are middleware functions that are executed in every incoming request matching the specified path. 

common ones are:
`express.json`
`express.urlencoded`

- These allows correctly parse the incoming request body
so that we can use it through req.body 

`app.use(express.static('public'))`

- This use to serve static files. It is a middleware function for serving static files, such as HTML, CSS, JavaScript, and images.
- setting up views


`Router Level Middleware`

router level middleware bound to an instance of express router using `<router>.use or router.<Method>` e.g router.get

eg:
```js

function routerMiddleware(req, res, next) {
  // Perform some operations
  console.log("Middleware function called");

  // Modify the request object
  req.customProperty = "Hello from myMiddleware";

  // Call the next middleware/route handler
  next();
}

app.use(routerMiddleware);

```

## Controllers 

- controllers comes to play whenever a request hits the server and the route matches the requested HTTP verb or method and path

- The route determines which controller should handle the request based on the defined middleware chain. 

the name of the controllers by conventions are based on the route they will be attached to 

e.g. GET route -> getSomething, POST route -> createSomething, DELETE route -> deleteSomething, 

Example of Controller

```js
const getUserById = async (req, res)=>{
    const userId = req.params.id;

    const user = await someDBQueryToGetUser(userId)
    if (!user){
        res.status(404).send("User not found")

        return 
    }
    
    res.send(`User Found : ${user.name}`)
}

```

`What is Happening Here`

- The controller extract the userId from the request parameters 
- it then invokes a data base query which is asynchronous
- if the user not found !user it sends the status code and the message User not found 
- if found it responds with status code 200 and user.name

# Handling Errors 

with try and catch we can handle errors. 

```js

const getUserById = async (req, res) => {
  const userId = req.params.id;

  try {
    const user = await someDBQueryToGetUser(userId);

    if (!user) {
      res.status(404).send("User not found");
      return;
    }

    res.send(`User found: ${user.name}`);
  } catch (error) {
    console.error("Error retrieving user:", error);
    res.status(500).send("Internal Server Error");

  }
};

```
## Error Handling with middleware 

the error handling middleware handles all errors in our app coming
down from other middleware functions and this error middleware function is commonly placed at every end of our app. 

```js

// Every thrown error in the application or the previous middleware function calling `next` with an error as an argument will eventually go to this middleware function

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send(err);
});


```


##  Creating Custom Errors

```js

class CustomNotFoundError extends Error {
  constructor(message){
    super(message);
    this.statusCode = 404
  }

  this.name = "NotFoundError"
}

```

## next Function

it is used to pass control to the next middleware function in the 
applications request-response cycle 

