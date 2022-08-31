var express = require('express');

var logger = require('morgan')
var cookieParser = require('cookie-parser');
var app = express();


// third party middleware

app.use(logger('dev'));
app.use(cookieParser());
app.use((req,res,next)=>{
    res.cookie('username','suraj');
    next()
})

app.get('/about',(req,res)=>{
    res.send('cookies to client')
})


// listening to port 3k

app.listen(3000,()=>{
    console.log('server is listening on 3k')
})