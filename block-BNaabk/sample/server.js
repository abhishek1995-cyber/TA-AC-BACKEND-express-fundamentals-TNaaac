var express = require('express');

var app = express();

app.get('/', (req,res)=>{
    res.send('welcome to express')
})

app.listen(3000, ()=>{
    console.log('server listening on port 3k')
})