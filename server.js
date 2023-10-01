// Simple express server with one endpoint to server requests to the server. Basic deployment test

const express = require('express');

const app = express();

app.get('/', (req, res) => {
    console.log('Request request to the most basic endpoint, sending response from server.');
    res.status(200).send(`<h1>${process.env.DIS_MSG}<h1>`);
});

const PORT = process.env.PORT || 80;

app.listen(PORT, () => {
    console.log('Server is listening on allocated port ' + PORT);
});