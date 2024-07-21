# EXPRESS

 Fast, unopinionated, minimalist web framework for Node.js 

## Setting up Express

```bash
npm install express
```

**app.js**

```js

const express = require('express');
const app = express();

app.get('/', (req, res) => res.send("<h1>Helloo From ExpressJs</h1>"))


const PORT = 3000;
app.listen(PORT, ()=> console.log("Server is running on port 3000"))

```
when our server receives a GET request like in this case **req**, Express stores the request in a request object. This request object gets passed through a chain of functions we call middleware functions until eventually, a middleware function tells express to respond to the request. 

express takes a callback function and passes the request object into the first parameter ( conventionally named req ) and response object into the res object ( conventionally named res ) our response object responds by .send() method 

## Request Object

the req object represents the HTTP request and has properties for the request query string, parameters, body , headers ..., 

### Properties 


|Properties|
------------
req.app
req.baseUrl
req.body
req.cookies
req.fresh
req.hostname
req.ip
req.ips
req.method
req.originalUrl
req.params
req.path
req.protocol
req.query
req.res
req.route
req.secure
req.signedCookies
req.stale
req.subdomains
req.xhr 

-------------
**req.app**

it holds a reference to the instance of the Express application that is using middleware 

**req.baseUrl**

The URL path on which a router instance was mounted 

```js

var greet = express.Router()

greet.get('/jp', function (req, res) {
  console.log(req.baseUrl) // /greet
  res.send('Konnichiwa!')
})

app.use('/greet', greet) // load the router on '/greet'

```

**req.body**

contains key-value pairs of data submitted in the request body. the 
default is undefined 

```js

var express = require('express')

var app = express()

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.post('/profile', function (req, res, next) {
  console.log(req.body)
  res.json(req.body)
})



```


**req.cookies**

contains cookies sent by the request. if the request doesn't have any cookies it will default to empty object 

**req.fresh**

it returns true when the response on cache is fresh and false otherwise

**req.hostname**

contains the hostname derived from the host http header

**req.ip**

contains the remote ip address of the request 

**req.ips**

array of ip addresses 


**req.method**

Contains a string corresponding to the HTTP method of the request: GET, POST, PUT, and so on.

**req.params**

this property is an object containing properties mapped to the named route "parameters"

**req.path**

contains the path part of the request URL

**req.protocol**

contains the request protocol string like http , https 

**req.query**

it is an object containing a property for each query string parameter in the route. when query parser is set to disabled. it is an empty object {} otherwise it is the result of configured query parser 

**req.res**

This property holds a reference to the response object that relates to this request object.


**req.route**

Contains the currently-matched route, a string. For example:

app.get('/user/:id?', function userIdHandler (req, res) {
  console.log(req.route)
  res.send('GET')
})

Example output from the previous snippet:

{ path: '/user/:id?',
  stack:
   [ { handle: [Function: userIdHandler],
       name: 'userIdHandler',
       params: undefined,
       path: undefined,
       keys: [],
       regexp: /^\/?$/i,
       method: 'get' } ],
  methods: { get: true } }

### Methods 


|Methods    |
-------------
req.accepts()
req.acceptsCharsets()
req.acceptsEncodings()
req.acceptsLanguages()
req.get()
req.is()
req.param()
req.range() 

**req.accepts()**

Checks if the specified content types are acceptable, based on the request’s Accept HTTP header field. 

```js

// Accept: text/html
req.accepts('html')
// => "html"

// Accept: text/*, application/json
req.accepts('html')
// => "html"
req.accepts('text/html')
// => "text/html"
req.accepts(['json', 'text'])
// => "json"
req.accepts('application/json')
// => "application/json"

// Accept: text/*, application/json
req.accepts('image/png')
req.accepts('png')
// => false

// Accept: text/*;q=.5, application/json
req.accepts(['html', 'json'])
// => "json"

```

**req.get(field)**

Returns the specified HTTP request header field (case-insensitive match). The Referrer and Referer fields are interchangeable.

```js

req.get('Content-Type')
// => "text/plain"

req.get('content-type')
// => "text/plain"

req.get('Something')
// => undefined

```

**req.is(type)**

Returns the matching content type if the incoming request’s “Content-Type” HTTP header field matches the MIME type specified by the type parameter. If the request has no body, returns null. Returns false otherwise.

```js 

req.is('html')
// => 'html'
req.is('text/html')
// => 'text/html'
req.is('text/*')
// => 'text/*'

// When Content-Type is application/json
req.is('json')
// => 'json'
req.is('application/json')
// => 'application/json'
req.is('application/*')
// => 'application/*'

req.is('html')
// => false

```

## Response Object 

The res object in an object that express sends when it gets an http request. 


|Properties|
------------
res.app
res.headerSent
res.locals

**res.app**

holds a reference to the instance of the express application that is using the middleware 

**res.headerSent**

Boolean Property that indicates if the app sent Http headers for the response

```js

app.get('/', function (req, res) {
  console.dir(res.headersSent) // false
  res.send('OK')
  console.dir(res.headersSent) // true
})


```

**res.locals**

to set variables accessible in templates rendered with res.render.

### Methods 


|Methods    |
------------
res.append()
res.attachment()
res.cookie()
res.clearCookie()
res.download()
res.end()
res.format()
res.get()
res.json()
res.jsonp()
res.links()
res.location()
res.redirect()
res.render()
res.send()
res.sendFile()
res.sendStatus()
res.set()
res.status()
res.type()
res.vary() 

**res.append(field [, value])**

appends the specified value to the Http response header field

```js
res.append('Link', ['<http://localhost/>', '<http://localhost:3000/>'])
res.append('Set-Cookie', 'foo=bar; Path=/; HttpOnly')
res.append('Warning', '199 Miscellaneous warning')


```

**res.attachment([filename])**

sets the http response Content-Disposition header field to 'attachment'

```js
res.attachment()

res.attachment('path/to/logo.png')

```

**res.cookie**

sets cookie name to value parameter. 
the parameter is an object that can have the following properties 


| Property     | Type               | Description                                                                 |
|--------------|--------------------|-----------------------------------------------------------------------------|
| domain       | String             | Domain name for the cookie. Defaults to the domain name of the app.          |
| encode       | Function           | A synchronous function used for cookie value encoding. Defaults to encodeURIComponent. |
| expires      | Date               | Expiry date of the cookie in GMT. If not specified or set to 0, creates a session cookie. |
| httpOnly     | Boolean            | Flags the cookie to be accessible only by the web server.                   |
| maxAge       | Number             | Convenient option for setting the expiry time relative to the current time in milliseconds. |
| path         | String             | Path for the cookie. Defaults to “/”.                                       |
| partitioned  | Boolean            | Indicates that the cookie should be stored using partitioned storage. See Cookies Having Independent Partitioned State (CHIPS) for more details. |
| priority     | String             | Value of the “Priority” Set-Cookie attribute.                               |
| secure       | Boolean            | Marks the cookie to be used with HTTPS only.                                |
| signed       | Boolean            | Indicates if the cookie should be signed.                                   |
| sameSite     | Boolean or String  | Value of the “SameSite” Set-Cookie attribute. More information at https://tools.ietf.org/html/draft-ietf-httpbis-cookie-same-site-00#section-4.1.1. |



**res.clearCookie(name [options])**
clears the cookies specified by name 

```js

res.cookie('name', 'tobi', {path: '/admin'})
res.clearCookie('name', {path: '/admin'})
```


**res.download(path [, filename] [, options] [, fn])**

Transfers The file at path as an 'attachment'

## Middleware 

Middleware in Express is a function that has access to the request object (`req`), the response object (`res`), and the next middleware function in the application's request-response cycle. Middleware functions can perform various tasks, such as executing code, modifying the request and response objects, ending the request-response cycle, and calling the next middleware function in the stack.

Middleware functions are a powerful way to handle common tasks such as logging, authentication, and error handling. They can be used at the application level, the router level, or for specific routes.

### How Middleware Works

1. **Request comes in**: When a request is made to the server, it goes through a series of middleware functions before reaching the route handler.
2. **Middleware functions are executed**: Each middleware function can perform some operations and then call `next()` to pass control to the next middleware function.
3. **Response is sent**: Once all middleware functions and the route handler have executed, the response is sent back to the client.

### Types of Middleware

1. **Application-level middleware**: Bound to an instance of `express()`.
2. **Router-level middleware**: Bound to an instance of `express.Router()`.
3. **Error-handling middleware**: Defined with four arguments: (err, req, res, next).
4. **Built-in middleware**: Provided by Express, such as `express.static`.
5. **Third-party middleware**: Provided by third-party libraries, such as `body-parser`.

### Example

Here’s a simple example to demonstrate middleware in Express:

```javascript
const express = require('express');
const app = express();

// Application-level middleware
app.use((req, res, next) => {
    console.log('Time:', Date.now());
    next(); // Pass control to the next middleware function
});

// Middleware to parse JSON bodies
app.use(express.json());

// Route handler
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Error-handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
```

### Explanation of the Example

1. **Logging Middleware**:
   ```javascript
   app.use((req, res, next) => {
       console.log('Time:', Date.now());
       next();
   });
   ```
   This middleware logs the current time whenever a request is received. It calls `next()` to pass control to the next middleware function.

2. **JSON Body Parsing Middleware**:
   ```javascript
   app.use(express.json());
   ```
   This built-in middleware parses incoming JSON requests and makes the parsed data available under `req.body`.

3. **Route Handler**:
   ```javascript
   app.get('/', (req, res) => {
       res.send('Hello World!');
   });
   ```
   This route handler sends a "Hello World!" message when the root URL (`/`) is accessed.

4. **Error-Handling Middleware**:
   ```javascript
   app.use((err, req, res, next) => {
       console.error(err.stack);
       res.status(500).send('Something broke!');
   });
   ```
   This middleware catches any errors that occur in the request-response cycle and sends a 500 status code with an error message.

5. **Starting the Server**:
   ```javascript
   const PORT = 3000;
   app.listen(PORT, () => {
       console.log(`Server is running on port ${PORT}`);
   });
   ```

By organizing your code using middleware, you can keep your application modular and maintainable, separating different concerns into their respective middleware functions.
 
## Routes 

routes are just a get way to go into some king of resources 
for example 

```js

app.get('/', (req, res)=>{
  res.send("This is the home resource ")
})

```

in this example our route is the root which the home of our app
Each HTTP verb has its own Express route method, and you can also use app.all() to make a route match all verbs.


### Path

The first argument we pass a route is the path to match, which can either be a string or a regular expression.

With string paths, we can also use certain symbols like ?, +, * and () to provide some pattern-matching functionality, similar to regular expressions. For example:

```js

// ? makes a character optional
// The following path matches both /message and /messages
"/messages?"

// * is a wildcard matching any number of any characters
// The following path can match /foo/barbar and even /foo-FOO/bar3sdjsdfbar
"/foo*/bar*bar"
```

**note**

the path app.get("*")
used to catch all request that come through GET verb 
if this route is defined before any other route the request wouldn't reach other request
it is better to write it for in the last 
to catch route errors 

### Route Parameters and Query Parameters 

#### Route Parameters 

to denote route parameters we start with segment `:` followed by the name of the parameter (which can only consist of case-sensitive alphanumeric characters, or _). just like variables or parameters 

and we can extract that parameter from the `req.params` object 

```js


app.get("/:username/messages", (req, res) => {
  console.log(req.params);
  res.end();
});

app.get("/:username/messages/:messageId", (req, res) => {
  console.log(req.params);
  res.end();
});


```

#### Query Parameters 

query parameters are a unique and optional part of a URL that appear at the end. the `?` denotes the start of the query parameters.
it is a key value pair separated with `=` and which key-value pair is separated from another key value pair with `&`

They are special as they are not actually considered part of the 
path itself, but are essentially more like arguments we can pass in 
to a given path. For example, /odin/messages?sort=date&
direction=ascending will still match the route with the /:username/
messages path, but we can access the sort=date and 
direction=ascending key-value pairs inside the middleware chain.

we use **res.query** to parse any parameters in the request.
if any keys are repeated express will the value of that key in arrays

```js

app.get("/:username/messages", (req, res) => {
  console.log("Params:", req.params);
  console.log("Query:", req.query);
  res.end();
});


```

### Routers 

In a real application with lots of routes, we’d probably want to 
organize our routes into groups and extract each group out to their 
own file. We could also then more easily write things that affect 
only the routes in that file, and not any others.

example

```js

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

```

- first you import the router from express 
- instantiate an object from Router class
- define your route with .get method 
- use the route by putting it on app with method .use

