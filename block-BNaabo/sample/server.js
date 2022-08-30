var express = require('express');

var app = express();


app.use((req,res,next)=>{
    console.log(req.url,req.method);
    next()
})

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(__dirname + '/public'))

// app.get('/images/img1.jpg',(req,res)=>{
//     res.sendFile(__dirname + '/index.html')
// })
app.get('/',(req,res)=>{
    res.sendFile(__dirname + "/index.html")
})

app.post('/json',(req,res)=>{
    console.log(req.body)
})

app.post('/contact',(req,res)=>{
    console.log(req.body)
})

app.listen(3000,()=>{
    console.log('listening to port 3k')
})