const http = require("http");
const handler = require("./routestwo");

console.log(handler.someText) //in server.js we use this in object.

const server = http.createServer(handler.handler);
// const server = http.createServer(handler.handler); if we used second (object) method.


server.listen(4001);
