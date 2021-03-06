const express = require('express');
const app = express();
const router = require('./db/ad/adRouter')
const mongoose = require('mongoose');
require('dotenv').config();

//middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/ad',router);
app.use( express.static( "views" ) );

mongoose.connect(process.env.DB_URL,
    { useNewUrlParser: true , useUnifiedTopology: true},
    ()=>{
    console.log("DB connect successful");

    // Web server start running
    app.listen(process.env.port || 3000 ,()=>{
        console.log("Web server start running at port:",process.env.port);
    })
});

// register view engine
app.set('view engine','ejs');



app.get('/',(req,res)=>{
    //res.send('<h1>Welcome Rainmaker96.com 4/27 2021 10:45 testing</h1>');
    //res.sendFile(__dirname+'/html/image.html');
    res.render('image',{dirName:"test.png"});
});