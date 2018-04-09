const express = require('express');
const app = express();

//Now attached to app we have a bunch of methods
// to start our server and send responses to the client
app.get('/', (request, response)=>{
	response.send('Hi, I\'m the server.');
})



app.get('/anythingWewant', (request,response)=>{
	response.send('Whatever');
})

app.get('/hello', (request, response)=>{
	response.send('Hello World');
})

app.get('/general', (request, response)=>{
	response.send('assembly');
})



app.listen(3000, ()=> {
	console.log('Server is listening on port 3000');
})