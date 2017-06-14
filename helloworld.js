var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
  var q = url.parse(req.url, true);
  var filename = "C:/Users/Soft/Desktop/myproject/bootstrap-3.3.7-dist" + q.pathname;
  //css starts
    
  //css ends
  fs.readFile(filename, function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    } 
    var extension=q.pathname.split(".").reverse()[0];
    if(extension=="html")
    res.writeHead(200, {'Content-Type': 'text/html'});
	else 
		res.writeHead(200, {'Content-Type': 'text/css'});
    res.write(data);
    return res.end();
  });


}).listen(8080);

