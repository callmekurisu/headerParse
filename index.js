var fs = require("fs")
var express = require('express')
var app = express()
var http = require('http')
var request = require('request')
var path = require('path')
const url = require('url')
var moment = require('moment')
var ip = require('ip')
var os = require('os')
var navigator = require('navigator')
var fs = require("fs")
var accepts = require('accepts')
var html = (fs.readFileSync('header.html').toString())

app.set('port', (process.env.PORT || 5000));

  
  
  app.get('/',function (req, res) {
     res.send(html)
})
  
    app.get('/api',function (req, res) {
      var ipAddy = ip.address()
      var os =  process.platform
      var header = req.headers["accept-language"]
      var box = [];
      for(i=0;i<5;i++){
	box.push(header[i])
      }
      var lang = box.join("")
      res.send('{"ip": '+'"'+ipAddy+'"'+", "+'"os": '+'"'+os+'"'+", "+'"lang": '+'"'+lang+'"}')
   
})

     //comment out to run live
    app.listen(process.env.PORT, '0.0.0.0', function(err) {
  console.log("Started listening on %s", app.url);
});
  
  /*uncomment out for running on localhost
    app.listen(5000, function(err) {
  console.log("Started listening on port 5000...");
});*/