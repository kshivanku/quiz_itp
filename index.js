var express = require('express')

var app = express()

var http = require('http')
http = http.Server(app)

app.get('/', function(req, res)){
	res.send("Hello ITP")
}

var server = http.listen(3000, function(){
	console.log ("I am listening to port 3000");
})