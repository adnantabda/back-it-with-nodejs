# Node.js

when we talk about Nodejs the most common definition is 
```
Nodejs is a javascript runtime environment built on top of Chrome V8 engine 
```
let us break it down 

## JAVASCRIPT RUNTIME ENVIRONMENT 

a runtime environment is essentially a platform where a programming language is executed. for javascript this environment provides all the necessary tools, libraries, and functionalities for Javascript code outside of a web browser 

## BUILT ON TOP OF CHROME V8 ENGINE

The V8 engine is a piece of software developed by Google. it's called an engine because it takes Javascript code and turns it into a machine code that a computer can understand and execute. it is very fast and efficient. Nodejs uses the V8 engine to execute Javascript code outside of a web browser.
we can simply say the creator of nodejs ripped out chrome v8 out of the browser and built node on top of it 

--------------------------------------------------------------------
A Node.js app runs in a single process, this means that the entire application runs as one instance, or one "unit" of execution, managed by the operating system. think of it as a single program that runs from start to finish as one piece, there's one main instance of the program running rather than multiple independent instances working together.

Nodejs provides a set of asynchronous I/O primitives in its standard
library that prevent javascript cod from blocking. libraries in nodeJs are written using non-blocking paradigms
when performing asynchronous operations Node.js will resume the operations when the response comes back.


## Example of Nodejs 

```js
const {createServer} =  require('node:http')

const hostname = '127.0.0.1'
const port = 3000

const server = createServer((request, response)=>{
    response.statusCode = 200;
    response.setHeader('Content-Type', 'application/json')
    response.end(JSON.stringify(["Data", "Data"]))
})


server.listen(port, hostname, ()=>{
    console.log(`server running at http://${hostname}:${port}/`)
})


```

This code first includes the Node.js http module.
The createServer() method of http creates a new HTTP server and returns it. 
