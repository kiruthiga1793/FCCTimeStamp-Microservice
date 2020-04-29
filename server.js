// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var moment = require('moment');

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});


app.get("/api/timestamp/", (req, res) => {
  res.json({ unix: Date.now(), utc: Date() });
});

app.get("/api/timestamp/:datestr", function (req, res) {
  //res.json({greeting: 'hello API'});
      let dd=req.params.datestr;
   var d = new Date(dd);
  
  if (/\d{5,}/.test(dd)){
  var dateInt = parseInt(dd);

   res.json({unix:dd,utc:new Date(dateInt).toUTCString()}) 
  }
  
  
  let dateObject = new Date(dd);

  if (dateObject.toString() === "Invalid Date") {
    res.json({"error" : "Invalid Date" });
  } else {
    res.json({unix:dateObject.valueOf(), utc:dateObject.toUTCString()});
  }

});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});