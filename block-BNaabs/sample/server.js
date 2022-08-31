var express = require('express');
var logger = require('morgan');
var cookieparser = require('cookie-parser');

var app = express();

app.use(express.urlencoded({extended: false}))

app.get('/',(req,res)=>{
    res.sendFile(__dirname + "/index.html")
})

app.get('/new',(req,res)=>{
    res.sendFile(__dirname + '/new.html')
})

app.get('/users/:username',(req,res)=>{
    var username = req.params.username;
    res.send(username)
})

app.post('/new',(req,res)=>{
   res.send(req.body)
})

app.listen(3000,()=>{
    console.log('listening to 3k')
})