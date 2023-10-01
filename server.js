// Simple express server with one endpoint to server requests to the server. Basic deployment test
const path = require('path');
const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/boo', (req, res) => {
    console.log('Request for Boo.');
    const fileDirectory = path.resolve(__dirname, '.', 'public/boo/');
    res.sendFile(fileDirectory + '/index.html', (err) => {
        if (err !== undefined) {
            console.log('Error occured when trying to send file --> ', err);
            res.sendStatus(500);
        }
    });
});

// app.get('/bari', (req, res) => {
//     console.log('Request for barir sobai.');
// });

const PORT = process.env.PORT || 80;

app.listen(PORT, () => {
    console.log('Server is listening on allocated port ' + PORT);
});