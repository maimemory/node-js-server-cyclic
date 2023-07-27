const express = require('express');
const app = express();
const fs = require('fs');

app.get('/', (request, response) => {
    console.log(request.query);
    const {q, sortBy } = request.query;
    response.send("Hello Home Page q=" + q + " sortBy=" + sortBy);
})

app.get('/file', (request, response) => {
    let content = fs.readFileSync('text.html');
    response.end(content);
})

app.get('/p/new', (request, response) => {
    response.send("New Post");
})

app.post('/p/new', (request, response) => {
    console.log(request.body);
    response.send("Already submit");
})

app.get('/p/:postId', (request, response) => {
    console.log(request.params);
    const { postId } = request.params
    response.send("Individual Post postID=" + postId);
})

app.get('/restapi', (request, response) => {
    response.sendFile(__dirname + "/fetch.html");
})

app.listen('9000', () => {
    console.log("Server start at http://localhost:9000");
})