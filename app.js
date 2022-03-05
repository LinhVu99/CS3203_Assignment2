const express = require('express');
const app = express();
const fs = require('fs');

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.listen(3000, function(req, res) {
    console.log('Server started at 3000');
});