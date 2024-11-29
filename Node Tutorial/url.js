var url = require('url');

var address="http://localhost:8080/public/default.html?name=akash&year=2024";

var q = url.parse(address,true);

console.log(q.host);
console.log(q.pathname);
console.log(q.search);
console.log(q.query);
console.log(q.query.name);

