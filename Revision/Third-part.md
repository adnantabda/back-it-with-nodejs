controllers 

the controller is the brains of the operation ensuring that each component plays its part in delivering the final result and is really just a function with well-defined responsibilities as part of the MVC pattern.

Handling responses

res.send - A general-purpose method for sending a response, it is flexible with what data you can send since it will automatically set the Content-Type header based on what data you pass it. For example, if you pass in an object, it will stringify it as JSON and set the Content-Type header to application/json.

res.json - This is a more explicit way to respond to a request with JSON. This always sets the Content-Type header to application/json and sends the data as JSON.

res.redirect - When you want to redirect the client to a different URL, this method allows for that capability.

res.render - If you’re using a template engine (covered in a later lesson), res.render allows you to render a view template and send the rendered HTML as the response.

Middleware 

middleware functions sit between the incoming request and the final intended route handler.

A middleware function typically takes three arguments (however, there is one that we will get into later that has four):

req - The request object, which represents the incoming HTTP request.

res - The response object, which represents the HTTP response that will be sent back to the client.

next - The function that pass the control to the next middleware function in the chain (we’ll get to this later). This is optional.

Types of middleware 

- application level middleware
they are bound to an instance of express using app.use or app.METHOD


- router level middleware 
they are bound to an instance of Express router using router.use or router.METHOD

```js

function myMiddleware(req, res, next) {
  // Perform some operations
  console.log("Middleware function called");

  // Modify the request object
  req.customProperty = "Hello from myMiddleware";

  // Call the next middleware/route handler
  next();
}

app.use(myMiddleware);

```

middleware functions are executed in order they are defined. 
The sequence matters 