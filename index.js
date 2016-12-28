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
      var lang = JSON.stringify(request.get("http://localhost:5000"))
      res.send('{"ip: '+ipAddy+", "+"os: "+os+", "+"lang: "+lang+'"}')
   
})

   
    app.listen(process.env.PORT, '0.0.0.0', function(err) {
  console.log("Started listening on %s", app.url);
});
  
  /*comment out for running on localhost
    app.listen(5000, function(err) {
  console.log("Started listening on port 5000...");
});*/