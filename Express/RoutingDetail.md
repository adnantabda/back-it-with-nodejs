# Routing 

Routing refers to how an application’s endpoints (URIs) respond to client requests. For an introduction to routing, 

- we define routing using methods of express app that corresponds to
Http methods 
- These routing methods specify a callback function (sometimes called “handler functions”) called when the application receives a request to the specified route (endpoint) and HTTP method.

## Route methods

A route method is derived from one of the HTTP methods, and is attached to an instance of the express class.

## Route parameters

Route parameters are named URL segments that are used to capture the values specified at their position in the URL.

## Response Methods 

The methods on response object send a response to the client and terminate request-response cycle. 

**TABLE**

| Methods | Description |
|---------|-------------|
|res.download() |	Prompt a file to be downloaded.|
|res.end() | 	End the response process. |
|res.json() |	Send a JSON response. |
|res.jsonp() |	Send a JSON response with JSONP support.|
|res.redirect() |	Redirect a request. |
|res.render() |	Render a view template. |
|res.send() |	Send a response of various types. |
|res.sendFile() |	Send a file as an octet stream. |
|res.sendStatus() |	Set the response status code and send its string representation as the response body. |

**express.Router**

we use express.Router class to create modular route handlers  A Router instance is a complete middleware and routing system
