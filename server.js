
var express = require('express');
var app = express();
var fs = require("fs");
var http = require("http");

var port = process.env.PORT || 3000;

app.get('/listFlags', function (req, res) {
	   fs.readFile( __dirname + "/" + "flags.json", 'utf8', function (err, data) {
		          console.log( data );
			         res.end( data );
				    });
})


var server = app.listen(port, function () {

	  var host = server.address().address
	  var port = server.address().port

	  console.log("Example app listening at http://%s:%s", host, port)

})
