const covid =require('corona-info');
const express=require('express');
const ejs = require('ejs');
// iska use hota ha as middleware to fetch data form html file
const bodyparser= require('body-parser');
const { json } = require('body-parser');
const app=express();



app.set('view engine','ejs');


app.use(bodyparser.json());
// if depricating error is coming
app.use(bodyparser.urlencoded({extended:false}));
app.get('/',(req,res)=>{
    res.render('index');
});
app.post('/getdata',(req,res)=>{

var countryhtml = req.body.country;
    
    covid.findData({country:countryhtml}).then(response =>{
     
         // sending data back to broswer....

        res.json({
        data:response
    })
    })

   



});

app.listen('3000',()=>{
    console.log('listening to the port');
});