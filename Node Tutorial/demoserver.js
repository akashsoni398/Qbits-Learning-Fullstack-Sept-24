var fs = require('fs');
var url = require('url');
var http = require('http');

http.createServer(function(req, res) {
    var q = url.parse(req.url,true);
    var filename = "./html-files" + q.pathname;
    console.log(filename);
    fs.readFile(filename, function(err,data) {
        if (err) {
            res.writeHead(404,{"content-type":"text/html"});
            return res.end("404 Not found");
        }
        res.write(data);
        return res.end();
    });
}).listen(8080);