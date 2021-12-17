const express = require('express');
const path = require('path');
const app = new express();
app.get('/',(req,res) =>{
    res.sendFile('index.html', {
        root: path.join(__dirname, './')
    })
});
const port = process.env.PORT;
app.listen(port || 2080);
app.use(express.static(path.join(__dirname, '/')));
