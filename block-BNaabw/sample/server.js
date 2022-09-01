var express = require('express');
var logger = require("morgan");
var cookieparser = require("cookie-parser");

var app = express();
// middleware

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(logger('dev'));
app.use(cookieparser());
app.use(express.static(__dirname + "/public"))


// routes

// app.get('/',(req,res)=>{
//     res.send(`<h1>welcome</h1>`)
// });
app.get('/users',(req,res)=>{
    res.send('users')
})
app.get('/',(req,res)=>{
    res.sendFile(__dirname + "/index.html")
})
app.get('/projects',(req,res)=>{
    res.sendFile(__dirname + "/project.html")
})

app.use((req,res,next)=>{
    res.send('page not found');
    next()
})


app.listen(4000,()=>{
    console.log('listening to 4k')
})