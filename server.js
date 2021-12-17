const express = require('express');
const path = require('path');
const app = new express();
app.get('/',(req,res) =>{
    res.sendFile('index.html', {
        root: path.join(__dirname, './')
    })
});
const port = process.env.PORT || 2080;
app.listen(port);
app.use(express.static(path.join(__dirname, '/')));
