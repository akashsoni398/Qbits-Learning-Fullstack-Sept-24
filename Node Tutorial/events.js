var fs = require('fs');


var data = fs.readFileSync("./html-files/demo.html");
console.log(data.toString());
console.log("read file Sync ended");

fs.readFile('./html-files/demo.html', function(err, data) {
    if (err) {
        console.log(err);
        return;
    }
    console.log(data.toString());
})

console.log("read file Async ended");
