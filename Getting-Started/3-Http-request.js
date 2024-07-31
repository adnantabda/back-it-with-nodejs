const https = require('https')

const options = {
    hostname: 'jsonplaceholder.typicode.com',
    port: 443,
    path: '/todos',
    method: 'GET'
}

const req = https.request(options, res=>{
    console.log('status code', res.statusCode)
    res.on('data', d=>{
        process.stdout.write(d)
    })
})

req.on('error', error=>{
    console.log(error)
})

req.end()

const axios = require('axios');

axios
  .get('https://jsonplaceholder.typicode.com/todos/')
  .then(res => {
    console.log(`statusCode: ${res.status}`);
    console.log(res.data);
  })
  .catch(error => {
    console.error(error);
  });

async function getData(){
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    const data = await response.json()
    console.log(data)
    return data
}

console.log(getData())