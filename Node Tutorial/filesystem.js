var fs = require("fs");
var http = require("http");

// rename file
fs.rename('newfile.txt','oldfile.txt', function(err) {
    if (err) throw err;
    console.log("File renamed");
})

// delete file
/*
fs.unlink('newfile2.txt', function(err) {
    if (err) throw err;
    console.log("File deleted");
})
*/

// create and update
/*
fs.writeFile('newfile.txt','File system test',function(err) {
    if (err) throw err;
    console.log('saved');
})
*/


// create file 2
/*
fs.open('newfile2.txt','w',function(err,file) {
    if (err) throw err;
    console.log("Saved!");
})
*/

//create file 1
/*
fs.appendFile('newfile.txt','Hello World', function(err) {
    if (err) throw err;
    console.log("Saved!")
})
*/

// read file
/* 
http.createServer(function(req,res) {
    fs.readFile('demo.html', function(err, data) {
        res.writeHead(200, {'content-type':'text/html'});
        res.write(data);
    })
}).listen(8080);
*/