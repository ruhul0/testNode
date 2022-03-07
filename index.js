// Setup basic express server
const express = require('express');
const app = express();
const path = require('path');
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const port = process.env.PORT || 4000;

app.get('/data', function(req, res) {
    console.log("test");
});

app.listen(4000);