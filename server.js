const express = require('express');
const server = express();
const Joi = require('joi');

server.use(express.json()); 

server.get('/', (req, res) => {

    res.send('hello there');
});

server.get('/:choice', (req, res) => {
    res.send(req.params.choice);
});

const port = process.env.PORT || 3000;
server.listen(port);