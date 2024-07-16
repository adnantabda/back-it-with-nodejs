# HTTP REQUEST


There are many ways to perform an HTTP request depending on the abstraction level we want to use.
 
The simplest way is with axios library but it provides abstractions
## GET

```js
const axios = require('axios')

axios.get(url).then(res => {
    console.log("status Code" , res.status)
    console.log(res)
}).catch(error => {
    console.error(err)
})

```

with HTTP Request 

```js

const https = require('https')

const options = {
    hostname: 'example.com',
    port: 443,
    path: '/todos'
    method: 'GET'
}

const req = https.request(options, res=>{
    console.log('status code', res.statusCode)
    res.on('data'. d=>{
        process.stdout.write(d)
    })
})

req.on('error', error=>{
    console.log(error)
})

req.end()

```

port numbers are used to identify specific processes or services on a server. They help direct incoming network traffic to the appropriate service. 

Example 443 is used for Https traffic, ensuring secure communication between the client 

--------------------------------------------------------------------

There are a total of 65,536 ports available in computer networking, ranging from 0 to 65,535. These ports are divided into three main categories:

### 1. **Well-Known Ports (0-1023)**
These are reserved for common services and protocols.
- **0-1023:** Reserved for privileged services and designated by IANA (Internet Assigned Numbers Authority).
  - **20-21:** FTP (File Transfer Protocol) - for transferring files.
  - **22:** SSH (Secure Shell) - for secure remote login.
  - **23:** Telnet - for text-based remote login.
  - **25:** SMTP (Simple Mail Transfer Protocol) - for sending emails.
  - **53:** DNS (Domain Name System) - for translating domain names to IP addresses.
  - **80:** HTTP (Hypertext Transfer Protocol) - for web traffic.
  - **110:** POP3 (Post Office Protocol) - for receiving emails.
  - **143:** IMAP (Internet Message Access Protocol) - for receiving emails.
  - **443:** HTTPS (HTTP Secure) - for secure web traffic.

### 2. **Registered Ports (1024-49151)**
These are assigned by IANA for specific services upon request.
- **1024-49151:** Used by user processes or applications.
  - **1433:** Microsoft SQL Server.
  - **3306:** MySQL database system.
  - **3389:** Microsoft RDP (Remote Desktop Protocol).

### 3. **Dynamic/Private Ports (49152-65535)**
These are used for private or temporary purposes, often dynamically allocated.
- **49152-65535:** Typically used for client-side communication and temporary connections.

### Summary of Important Ports:
- **20-21:** FTP
- **22:** SSH
- **23:** Telnet
- **25:** SMTP
- **53:** DNS
- **80:** HTTP
- **110:** POP3
- **143:** IMAP
- **443:** HTTPS
- **1433:** Microsoft SQL Server
- **3306:** MySQL
- **3389:** Microsoft RDP

For a full list of ports, the IANA maintains an official registry of port assignments and their associated services. However, understanding the key ports above covers most common use cases in everyday networking.

## POST

```js 

const axios = require('axios');

axios
  .post('https://whatever.com/todos', {
    todo: 'Buy the milk',
  })
  .then(res => {
    console.log(`statusCode: ${res.status}`);
    console.log(res);
  })
  .catch(error => {
    console.error(error);
  });


```

with Http 

```js
const https = require('https');

const data = JSON.stringify({
  todo: 'Buy the milk',
});

const options = {
  hostname: 'whatever.com',
  port: 3000,
  path: '/todos',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length,
  },
};

const req = https.request(options, res => {
  console.log(`statusCode: ${res.statusCode}`);

  res.on('data', d => {
    process.stdout.write(d);
  });
});

req.on('error', error => {
  console.error(error);
});

req.write(data);
req.end();


```

# HTTP Module 

The Node.js `http` module provides functionality to create and manage HTTP servers and clients. 

- **Creating a Server**: Use `http.createServer()` to create an HTTP server.
- **Request and Response**: Handle incoming requests and send responses using `req` and `res` objects.
- **Server Methods**: Important methods include `server.listen()` to start the server and `server.close()` to stop it.
- **HTTP Clients**: Use `http.request()` or `http.get()` to make HTTP requests.

For more details, refer to the [Node.js HTTP module documentation](https://nodejs.org/api/http.html).
Here’s a summary with the additional key concepts:

### Node.js HTTP Module Key Concepts

1. **http.Agent**: Manages connection persistence and reuse for HTTP clients. It maintains a queue of pending requests for a host and port, using a single socket connection for each until the queue is empty. Connection behavior is controlled by the `keepAlive` option.

2. **http.ClientRequest**: Represents an outgoing HTTP request.

3. **http.Server**: Used to create an HTTP server that listens for requests on a specified port and hostname.

4. **http.ServerResponse**: Represents the response from the server to the client.

5. **http.IncomingMessage**: Represents the request to the server, including headers and data.

6. **http.OutgoingMessage**: Represents the outgoing message from the server or client.