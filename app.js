var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var moment = require('moment');


app.get('/api/timestamp/:datestr',function(req,res){
       
    var datestr=req.params.datestr;
   var d = Number(new Date(datestr));
  if(moment(d).isValid==true){
   res.json({"unix":d.getTime(),"utc":d.toUTCString()}) 
  }
  else{
    res.json({"error" : "Invalid Date" });
  }
    // var d = new Date(datestr);
 
 
})