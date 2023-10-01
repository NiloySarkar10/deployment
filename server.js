// Simple express server with one endpoint to server requests to the server. Basic deployment test

const express = require('express');

const app = express();

app.get('/', (req, res) => {
    console.log('Request request to the most basic endpoint, sending response from server.');
    res.status(200).send({
        "greeting": "Hello to the worlds most basic express app."
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('Server is listening on allocated port ' + PORT);
});