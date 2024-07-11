#!/usr/bin/env node

const {createServer} =  require('node:http')

const hostname = '127.0.0.1'
const port = 3000

const server = createServer((request, response)=>{
    console.log(request.headers)
    response.statusCode = 200;
    response.setHeader('Content-Type', 'application/json')
    response.end(JSON.stringify(['Adnan']))
})

server.listen(port, hostname, ()=>{
    console.log(`server running at http://${hostname}:${port}/`)
})