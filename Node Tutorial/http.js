var xyz = require('http');
var url = require("url");

xyz.createServer(function (req, res) {
    res.writeHead(200, {'content-type':'text/html'});

    var q = url.parse(req.url, true).query;
    var txt = q.year+" "+q.month;
    res.end(txt);
}).listen(8080);