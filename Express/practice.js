const express = require('express');
const app = express();

const PORT = 4000;

app.use((req, res, next) => {
    const timeOfRequest = new Date()
    console.log('Time:', timeOfRequest , req.method , req.url , );

    next();
});

app.get('/params/:id', (req, res) => {
    const routeParams = req.params;
    const queryParams = req.query;

    console.log('Route Params:', routeParams);
    console.log('Query Params:', queryParams);

    res.send(`Express it with Express. Route Params: ${JSON.stringify(routeParams)}, Query Params: ${JSON.stringify(queryParams)}`);

});

// This Example show the difference between query parameters and route parameters 
// query parameters req.query 
// route parameters req.params 
// if we request http://localhost:4000/12?name=john&id=12&school=haramaya 
// the server only shows the id for route parameters 
// and it shows all of the query for query parameters 


app.get('/home', (req, res)=>{
    res.json({name: "John", class: 12, city : "Harar", country: "Ethiopia", Career: "N/A"})
})


// The method res.json send a json object to the client 

app.get('/home/200', (req, res)=>{
    res.sendStatus(403)
})

// the method res.sendStatus will send string of response. e.g the 200 will send OK and 403 will respond with forbidden 

app.get('/home/end', (req, res)=>{
    res.end("Adnan")
})

// The method res.end will send a text opposite of send that sends markup the sends a text string with pre tag 

app.get("*", (req, res)=>{
    res.send(`Sorry Pel we think you lost ${req.url} Doesn't exists`)
})

app.listen(PORT, () => {
    console.log(`The server is listening to port ${PORT}`);
});