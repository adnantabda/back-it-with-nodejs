# controllers 

the controller is the brains of the operation ensuring that each component plays its part in delivering the final result and is really just a function with well-defined responsibilities as part of the MVC pattern.

## Handling responses

res.send - A general-purpose method for sending a response, it is flexible with what data you can send since it will automatically set the Content-Type header based on what data you pass it. For example, if you pass in an object, it will stringify it as JSON and set the Content-Type header to application/json.

res.json - This is a more explicit way to respond to a request with JSON. This always sets the Content-Type header to application/json and sends the data as JSON.

res.redirect - When you want to redirect the client to a different URL, this method allows for that capability.

res.render - If you’re using a template engine (covered in a later lesson), res.render allows you to render a view template and send the rendered HTML as the response.

## Middleware 

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


## Key Differences Between Controller and Middleware 

They both serve different purposes in the request-response cycle. Both are involved in processing requests but the have distinct roles and functionalities

| Aspect            | **Middleware**                                  | **Controller**                                |
|-------------------|-------------------------------------------------|-----------------------------------------------|
| **Purpose**       | Middleware is designed to process or modify requests **before** they reach the controller or perform tasks after the controller sends a response. It can handle things like authentication, validation, logging, or request transformations. | Controllers are responsible for handling the **main business logic** of the request. They typically take the incoming request, perform operations (e.g., fetch data from a database), and then send a response to the client. |
| **Execution Order**| Middleware is executed **before** the controller or even **after** (e.g., error handling). Middleware can also run at any point in the lifecycle if registered accordingly. | Controllers are executed **after** the middleware has processed the request. They handle the actual functionality of the route, like CRUD operations, rendering data, etc. |
| **Call Signature** | Middleware functions have a signature of `(req, res, next)` and always include `next()`. They can either pass the request to the next middleware/controller or terminate the cycle by sending a response. | Controller functions typically have a signature of `(req, res)` and don’t need `next()` because they send the final response back to the client, concluding the request-response cycle. |
| **Responsibility** | - Request parsing (e.g., JSON, form data) <br> - Authentication/authorization <br> - Validation of inputs <br> - Error handling <br> - Logging or monitoring requests | - Handle business logic <br> - Query or update databases <br> - Process requests (e.g., data formatting) <br> - Return responses (e.g., HTML, JSON) |
| **Termination**   | Middleware often **does not terminate** the request-response cycle (unless it sends a response or handles an error). It typically calls `next()` to pass control to the next middleware or controller. | Controllers typically **terminate** the cycle by sending a response back to the client, like returning a JSON object or rendering a view. |
| **Global vs Route**| Middleware can be global (applies to all routes) or route-specific (applies to specific routes). | Controllers are always tied to specific routes and handle the logic for those routes. |
| **Example Use Cases**| - Parsing request body (e.g., `express.json()` for JSON parsing) <br> - Authentication (e.g., checking JWT tokens) <br> - Validation (e.g., checking if the request body has required fields) <br> - Logging requests (e.g., request logging with `morgan`) | - Fetching data from a database (e.g., retrieving users from `User.find()`) <br> - Processing user actions (e.g., creating, updating, deleting records) <br> - Returning a formatted response (e.g., JSON or rendered HTML) |

### Middleware Explained:
Middleware functions are executed in the middle of the request-response cycle and are used to **pre-process** or **post-process** requests. Middleware can:
- Modify or validate the request object (`req`) before it reaches the controller.
- Check whether a user is authenticated before allowing access to a route.
- Log the details of the request.
- Handle errors or terminate the cycle by sending a response directly.

Middleware always has the signature `function(req, res, next)` where:
- `req`: The request object.
- `res`: The response object.
- `next`: A function that passes control to the next middleware or the controller.

Example Middleware:
```javascript
const authMiddleware = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) return res.status(401).json({ message: 'Unauthorized' });
  try {
    const user = jwt.verify(token, process.env.JWT_SECRET);
    req.user = user; // Attach user to the request object
    next(); // Pass control to the next function (controller or middleware)
  } catch (error) {
    res.status(400).json({ message: 'Invalid token' });
  }
};
```

### Controller Explained:
A controller is a function that contains the **core business logic** of an application for a specific route. It takes a request, performs necessary operations (such as database queries, data processing), and sends a response to the client.

Controllers typically do not call `next()` because they terminate the request-response cycle by sending a final response.

Example Controller:
```javascript
const getUserProfile = (req, res) => {
  const userId = req.user.id; // Extracted from the auth middleware
  User.findById(userId, (err, user) => {
    if (err) return res.status(500).json({ message: 'Server error' });
    res.status(200).json({ name: user.name, email: user.email }); // Final response
  });
};
```

### Where Middleware and Controller Fit in the Flow:
- Middleware runs **before** or **after** the controller, depending on when you register it. For example, authentication middleware runs before the controller to ensure that the user is authenticated before accessing a protected route.
- Controllers are tied directly to routes and handle the core logic for those routes.

### Example Route with Middleware and Controller:
```javascript
const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const userController = require('../controllers/userController');

// The request first goes through authMiddleware, then reaches the controller
router.get('/profile', authMiddleware, userController.getUserProfile);

module.exports = router;
```
